export type ResponseCode = 200 | 404 | 503;

export type ResponseCatalog = Record<number, { retryable: boolean }>;
