export {};

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Style {
  bg: string;
  fg: string;
  size: Size;
}

const style: Style = {
  bg: "#101010",
  fg: "#FFFFFF",
  size: "xl",
};
