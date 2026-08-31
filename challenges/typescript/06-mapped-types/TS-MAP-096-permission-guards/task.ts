export type PermissionGuards<P extends string,Context> = Record<string,(context:Context)=>boolean>;
