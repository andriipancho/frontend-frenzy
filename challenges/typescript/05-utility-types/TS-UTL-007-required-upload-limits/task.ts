export interface UploadPolicy {
  limits: {
    maxBytes?: number;
    maxFiles?: number;
  };
  allowedMimeTypes: string[];
}

export type ResolvedUploadLimits = UploadPolicy["limits"];
