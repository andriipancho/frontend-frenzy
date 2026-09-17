export interface MutationClient<
  Mutations extends Record<
    PropertyKey,
    { input: unknown; output: unknown }
  >,
> {
  execute<Name extends keyof Mutations>(
    name: Name,
    input: Mutations[Name]["input"],
  ): Promise<Mutations[Name]["output"]>;
}
