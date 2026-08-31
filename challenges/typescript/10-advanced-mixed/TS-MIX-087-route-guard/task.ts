export type MixedGuard<T extends {auth:boolean;roles?:readonly string[]}> = T;
