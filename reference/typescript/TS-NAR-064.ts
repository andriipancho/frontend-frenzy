export type UploadState =
  | { status: "idle" }
  | { status: "uploading"; progress: number }
  | { status: "completed"; url: string }
  | { status: "failed"; error: string };
