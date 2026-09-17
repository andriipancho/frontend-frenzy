export function tagValue<T, TTag extends string>(
  value: T,
  tag: TTag,
): { value: T; tag: TTag } {
  return { value, tag };
}
