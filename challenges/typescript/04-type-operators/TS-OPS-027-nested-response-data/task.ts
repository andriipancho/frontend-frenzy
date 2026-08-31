export interface ApiResponse {
  status: number;
  body: {
    data: { id: string; name: string };
    cached: boolean;
  };
}

export type ResponseData = unknown;
