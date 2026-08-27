export type Shape =
  | { radius: number }
  | { width: number; height: number };

export function measureShape(shape: Shape): number {
  return shape.radius;
}
