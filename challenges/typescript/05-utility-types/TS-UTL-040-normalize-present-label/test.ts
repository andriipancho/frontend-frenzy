import { normalizeLabel } from "./task.js";

normalizeLabel("  Ready ");
// @ts-expect-error null must be handled before this boundary
normalizeLabel(null);
// @ts-expect-error undefined must be handled before this boundary
normalizeLabel(undefined);
