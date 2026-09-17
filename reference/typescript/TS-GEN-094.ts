export interface FormWriter<Model extends object> {
  setField<Name extends keyof Model>(
    name: Name,
    value: Model[Name],
  ): void;
}
