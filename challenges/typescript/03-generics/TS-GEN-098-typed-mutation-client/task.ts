export interface MutationClient<
  Mutations extends Record<
    PropertyKey,
    { input: unknown; output: unknown }
  >,
> {
  execute(
    name: keyof Mutations,
    input: Mutations[keyof Mutations]["input"],
  ): Promise<Mutations[keyof Mutations]["output"]>;
}
