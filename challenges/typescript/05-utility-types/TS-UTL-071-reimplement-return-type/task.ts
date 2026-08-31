export type MyReturnType<
  F extends (...args: never[]) => unknown,
> = unknown;
