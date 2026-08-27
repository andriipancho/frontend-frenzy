import { isSuccess, type Result } from "./task.js";

declare const result: Result;
if (isSuccess(result)) {
  result.data.toUpperCase();
} else {
  result.error.toUpperCase();
}
