export const validators = {
  email: (value: string) => value.includes("@"),
  positive: (value: number) => value > 0,
};

export type ValidatorMap = Record<string, (...args: never[]) => boolean>;
