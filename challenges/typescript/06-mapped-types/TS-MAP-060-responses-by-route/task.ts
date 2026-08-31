export type ResponsesByRoute<U extends { route: PropertyKey; response: unknown }> = Record<PropertyKey,unknown>;
