export {};
import { assert, Equals } from "tsafe";
import { ButtonProps as BUTTON } from "../solutions/07-Function.solution";

type ButtonProps = {
  bg: string;
  fg: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  onClick: never;
};

const button: ButtonProps = {
  bg: "white",
  fg: "black",
  size: "sm",
  onClick: (event: Event) => console.log(event),
};

assert<Equals<ButtonProps, BUTTON>>();
