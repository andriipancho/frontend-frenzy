export type RecordShape = { id: string; createdAt: Date; tags: readonly string[]; score: number };

// TODO: derive the registry from its source model.
export type SerializerRegistry<T extends object> = unknown;
