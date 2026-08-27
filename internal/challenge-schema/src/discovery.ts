import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { parseChallengeMetadata, type ChallengeMetadata } from "./index.js";

export interface Challenge {
  readonly metadata: ChallengeMetadata;
  readonly directory: string;
  readonly relativeDirectory: string;
  readonly topicDirectory: string;
}

export function findRepositoryRoot(start = process.cwd()): string {
  let candidate = start;
  while (true) {
    const packagePath = join(candidate, "package.json");
    if (existsSync(packagePath)) {
      const packageJson = JSON.parse(readFileSync(packagePath, "utf8")) as { name?: string };
      if (packageJson.name === "frontend-frenzy") return candidate;
    }
    const parent = dirname(candidate);
    if (parent === candidate) throw new Error("Could not find the Frontend Frenzy repository root.");
    candidate = parent;
  }
}

function findMetadataFiles(directory: string): string[] {
  if (!existsSync(directory)) return [];
  const files: string[] = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...findMetadataFiles(path));
    if (entry.isFile() && entry.name === "meta.json") files.push(path);
  }
  return files;
}

export function discoverChallenges(root: string): Challenge[] {
  const challengeRoot = join(root, "challenges");
  return findMetadataFiles(challengeRoot)
    .map((metadataPath) => {
      const directory = dirname(metadataPath);
      const metadata = parseChallengeMetadata(
        JSON.parse(readFileSync(metadataPath, "utf8")) as unknown,
        relative(root, metadataPath),
      );
      return {
        metadata,
        directory,
        relativeDirectory: relative(root, directory),
        topicDirectory: basename(dirname(directory)),
      };
    })
    .sort(
      (left, right) =>
        left.relativeDirectory.localeCompare(right.relativeDirectory) ||
        left.metadata.id.localeCompare(right.metadata.id),
    );
}

export function currentModuleDirectory(metaUrl: string): string {
  return dirname(fileURLToPath(metaUrl));
}
