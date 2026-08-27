export interface FormWriter<Model extends object> {
  setField(
    name: keyof Model,
    value: Model[keyof Model],
  ): void;
}
