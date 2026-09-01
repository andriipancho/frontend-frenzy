import ts from "typescript";

export const RESTRICTIONS = ["any", "type-assertion", "non-null-assertion", "ts-ignore"] as const;

export type Restriction = (typeof RESTRICTIONS)[number];

export interface Violation {
  readonly restriction: Restriction;
  readonly line: number;
  readonly text: string;
}

/** `as const` narrows a literal; it is not the unsound widening the challenges forbid. */
function isConstAssertion(node: ts.AsExpression): boolean {
  return (
    ts.isTypeReferenceNode(node.type) &&
    ts.isIdentifier(node.type.typeName) &&
    node.type.typeName.text === "const"
  );
}

function describe(node: ts.Node, source: ts.SourceFile): { line: number; text: string } {
  const { line } = source.getLineAndCharacterOfPosition(node.getStart(source));
  return { line: line + 1, text: node.getText(source).split("\n")[0]?.trim() ?? "" };
}

/**
 * A README constraint such as "do not use `any` or assertions" is only a promise
 * until something checks it. This reads the solution's syntax, so the words `any`
 * and `as` inside comments, strings, and identifiers are never mistaken for one.
 */
export function findViolations(
  code: string,
  forbidden: readonly Restriction[],
  fileName = "task.ts",
): Violation[] {
  if (forbidden.length === 0) return [];
  const source = ts.createSourceFile(fileName, code, ts.ScriptTarget.ES2022, true);
  const forbid = new Set(forbidden);
  const violations: Violation[] = [];

  const record = (restriction: Restriction, node: ts.Node): void => {
    if (forbid.has(restriction)) violations.push({ restriction, ...describe(node, source) });
  };

  const visit = (node: ts.Node): void => {
    if (node.kind === ts.SyntaxKind.AnyKeyword) record("any", node);
    else if (ts.isAsExpression(node) && !isConstAssertion(node)) record("type-assertion", node);
    else if (ts.isTypeAssertionExpression(node)) record("type-assertion", node);
    else if (ts.isNonNullExpression(node)) record("non-null-assertion", node);
    ts.forEachChild(node, visit);
  };
  visit(source);

  if (forbid.has("ts-ignore")) {
    for (const [index, line] of code.split("\n").entries()) {
      if (/@ts-(ignore|expect-error|nocheck)\b/.test(line)) {
        violations.push({ restriction: "ts-ignore", line: index + 1, text: line.trim() });
      }
    }
  }

  return violations.sort((left, right) => left.line - right.line);
}

export function formatViolations(violations: readonly Violation[]): string {
  return violations
    .map((violation) => `  line ${violation.line}: ${violation.restriction} — ${violation.text}`)
    .join("\n");
}
