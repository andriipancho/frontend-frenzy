import { normalizeUnknown } from "./task.js";

normalizeUnknown(" ready ");
normalizeUnknown("");
normalizeUnknown(42);
normalizeUnknown(null);
