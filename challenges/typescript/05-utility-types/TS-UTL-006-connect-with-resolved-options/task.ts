export interface ConnectionOptions {
  host?: string;
  port?: number;
  secure?: boolean;
}

export function connect(options: ConnectionOptions): string {
  return `${options.host}:${options.port}`;
}
