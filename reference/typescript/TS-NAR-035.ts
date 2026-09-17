export type Shape =
  | { radius: number }
  | { width: number; height: number };

export function measureShape(shape: Shape): number {
  return "radius" in shape ? Math.PI * shape.radius ** 2 : shape.width * shape.height;
}
