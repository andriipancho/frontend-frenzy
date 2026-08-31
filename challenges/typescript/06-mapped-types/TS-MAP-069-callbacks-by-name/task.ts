export type CallbacksByName<U extends {name:PropertyKey;payload:unknown}> = Record<PropertyKey,(payload:unknown)=>void>;
