export function swapPair<A, B>(pair: [A, B]): [B, A] {
  return [pair[1], pair[0]];
}
