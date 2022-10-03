export {};
import {
  A as STR,
  B as NUM,
  C as BOOL,
  D as ARR,
  E as TUP,
  F as OBJ,
} from "../solutions/01-Basic_Types.solution";
import { assert, Equals } from "tsafe";

export type A = ;

export type B = ;

export type C = ;

export type D = ;

export type E = ;

export type F = ;

const a: A = "It's a string";

const b: B = 12345;

const c: C = true;

const d: D = [1, 2, 3, 4, 5];

const e: E = [1, "A"];

const f: F = {
  name: "varun bardwaj",
  phno: 1234567890,
};

assert<Equals<A, STR>>();
assert<Equals<B, NUM>>();
assert<Equals<C, BOOL>>();
assert<Equals<D, ARR>>();
assert<Equals<E, TUP>>();
assert<Equals<F, OBJ>>();
