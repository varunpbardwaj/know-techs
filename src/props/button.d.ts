import { JSX } from "solid-js";

export type ButtonType = {
  children: JSX.Element;
  onClick: () => void;
};
