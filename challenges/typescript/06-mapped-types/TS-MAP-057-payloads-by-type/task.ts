export type PayloadsByType<U extends { type: PropertyKey; payload: unknown }> = Record<PropertyKey, unknown>;
