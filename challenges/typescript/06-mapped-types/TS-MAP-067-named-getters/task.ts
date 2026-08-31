export type NamedGetters<K extends string,V> = Record<string,()=>V>;
