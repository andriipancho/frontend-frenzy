export const DIFFICULTIES = ["easy", "medium", "hard", "boss"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

export interface ChallengeMetadata {
  readonly id: string;
  readonly title: string;
  readonly domain: string;
  readonly topic: string;
  readonly difficulty: Difficulty;
  readonly topics: readonly string[];
  readonly estimatedMinutes: number;
  readonly prerequisites: readonly string[];
  readonly hints: readonly string[];
  readonly validation: {
    readonly type: "typescript";
  };
}

const ID_PATTERN = /^[A-Z]{2,8}-[A-Z]{2,8}-\d{3}$/;
const SLUG_PATTERN = /^[a-z][a-z0-9-]*$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function validateChallengeMetadata(value: unknown): string[] {
  if (!isRecord(value)) {
    return ["metadata must be a JSON object"];
  }

  const errors: string[] = [];
  const allowed = new Set([
    "id",
    "title",
    "domain",
    "topic",
    "difficulty",
    "topics",
    "estimatedMinutes",
    "prerequisites",
    "hints",
    "validation",
  ]);

  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) errors.push(`unexpected property: ${key}`);
  }

  if (typeof value.id !== "string" || !ID_PATTERN.test(value.id)) {
    errors.push("id must match DOMAIN-TOPIC-NNN");
  }
  if (typeof value.title !== "string" || value.title.trim().length < 3) {
    errors.push("title must contain at least 3 characters");
  }
  if (typeof value.domain !== "string" || !SLUG_PATTERN.test(value.domain)) {
    errors.push("domain must be a lowercase slug");
  }
  if (typeof value.topic !== "string" || !SLUG_PATTERN.test(value.topic)) {
    errors.push("topic must be a lowercase slug");
  }
  if (!DIFFICULTIES.includes(value.difficulty as Difficulty)) {
    errors.push(`difficulty must be one of: ${DIFFICULTIES.join(", ")}`);
  }
  if (!isStringArray(value.topics) || value.topics.length === 0) {
    errors.push("topics must be a non-empty string array");
  } else if (new Set(value.topics).size !== value.topics.length) {
    errors.push("topics must not contain duplicates");
  } else if (value.topics.some((topic) => !SLUG_PATTERN.test(topic))) {
    errors.push("every topics entry must be a lowercase slug");
  }
  if (
    typeof value.estimatedMinutes !== "number" ||
    !Number.isInteger(value.estimatedMinutes) ||
    value.estimatedMinutes < 1 ||
    value.estimatedMinutes > 180
  ) {
    errors.push("estimatedMinutes must be an integer from 1 to 180");
  }
  if (!isStringArray(value.prerequisites)) {
    errors.push("prerequisites must be a string array");
  } else if (new Set(value.prerequisites).size !== value.prerequisites.length) {
    errors.push("prerequisites must not contain duplicates");
  } else if (value.prerequisites.some((prerequisite) => !SLUG_PATTERN.test(prerequisite))) {
    errors.push("every prerequisites entry must be a lowercase slug");
  }
  if (!isStringArray(value.hints) || value.hints.length < 1 || value.hints.length > 3) {
    errors.push("hints must contain between 1 and 3 predefined hints");
  } else if (value.hints.some((hint) => hint.trim().length < 8)) {
    errors.push("every hint must contain at least 8 characters");
  }
  if (!isRecord(value.validation) || value.validation.type !== "typescript") {
    errors.push("validation.type must be typescript");
  } else if (Object.keys(value.validation).some((key) => key !== "type")) {
    errors.push("validation contains an unexpected property");
  }

  return errors;
}

export function parseChallengeMetadata(value: unknown, source: string): ChallengeMetadata {
  const errors = validateChallengeMetadata(value);
  if (errors.length > 0) {
    throw new Error(`${source}:\n${errors.map((error) => `  - ${error}`).join("\n")}`);
  }
  return value as unknown as ChallengeMetadata;
}
