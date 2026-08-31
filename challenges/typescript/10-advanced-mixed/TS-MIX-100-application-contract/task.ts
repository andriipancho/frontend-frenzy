export type ApplicationContract<T extends {[K in keyof T]:{input:unknown;output:unknown;async:boolean}}> = T;
