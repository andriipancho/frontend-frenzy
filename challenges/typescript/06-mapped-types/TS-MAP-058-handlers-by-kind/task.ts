export type HandlersByKind<U extends { kind: PropertyKey }> = Record<PropertyKey,(value:U)=>void>;
