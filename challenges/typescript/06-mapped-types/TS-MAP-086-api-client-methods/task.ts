export type ApiClient<T extends {[K in keyof T]:{request:unknown;response:unknown}}> = T;
