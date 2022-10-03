export {};

export type ButtonProps = {
  bg: string;
  fg: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  onClick: (e: Event) => void;
};

const button: ButtonProps = {
  bg: "white",
  fg: "black",
  size: "sm",
  onClick: (event: Event) => console.log(event),
};
