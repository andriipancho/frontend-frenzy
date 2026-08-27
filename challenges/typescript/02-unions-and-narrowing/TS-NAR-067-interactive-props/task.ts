export type InteractiveProps = {
  as: "link" | "button";
  label: string;
  href?: string;
  onClick?: () => void;
};
