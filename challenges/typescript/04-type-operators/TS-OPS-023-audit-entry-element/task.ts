export interface AuditLog {
  source: string;
  entries: Array<{ at: Date; action: string }>;
}

export type AuditEntry = unknown;
