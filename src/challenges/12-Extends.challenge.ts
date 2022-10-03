export {};
import { assert, Equals } from "tsafe";

interface style_1 {
  bg: string;
  fg: string;
  fontSize: number;
  fontWeight: number;
}

interface style_2 {
  borderRadius: number | string;
  border: string;
  padding: number;
  margin: number;
}

assert<
  Equals<
    style_2,
    {
      bg: string;
      fg: string;
      fontSize: number;
      fontWeight: number;
      borderRadius: number | string;
      border: string;
      padding: number;
      margin: number;
    }
  >
>();
