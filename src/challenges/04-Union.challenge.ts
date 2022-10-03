export {};
import { assert, Equals } from "tsafe";
import { Size as SIZE } from "../solutions/04-Union.solution";

//Make sure the prop size accepts only "xs"/ "sm"/ "md"/ "lg"/ "xl",
type Size = ;

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

assert<Equals<Size, SIZE>>();
