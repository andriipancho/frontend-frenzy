export type UploadState = {
  status: "idle" | "uploading" | "completed" | "failed";
  progress?: number;
  url?: string;
  error?: string;
};
