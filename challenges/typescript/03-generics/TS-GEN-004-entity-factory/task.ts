// TODO: constrain the input and preserve its complete type in the result.
export function createEntity(input: object): object {
  return { ...input, createdAt: new Date() };
}
