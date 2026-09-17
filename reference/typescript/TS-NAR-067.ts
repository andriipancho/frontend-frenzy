export type InteractiveProps =
  | { as: "link"; label: string; href: string; onClick?: never }
  | { as: "button"; label: string; onClick: () => void; href?: never };
