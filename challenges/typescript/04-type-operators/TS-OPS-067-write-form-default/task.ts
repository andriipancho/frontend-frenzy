export interface FormDefaults {
  email: string;
  age: number;
  subscribed: boolean;
}

export function writeDefault(
  defaults: FormDefaults,
  field: keyof FormDefaults,
  value: FormDefaults[keyof FormDefaults],
): void {
  defaults[field] = value as never;
}
