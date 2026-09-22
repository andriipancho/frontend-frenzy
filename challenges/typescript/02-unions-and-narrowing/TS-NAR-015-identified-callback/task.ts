export type IdentifiedHandler = ((event: string) => void) & { readonly id: string };
