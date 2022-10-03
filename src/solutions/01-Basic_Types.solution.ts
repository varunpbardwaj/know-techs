export {};

export type A = string;

export type B = number;

export type C = boolean;

export type D = number[]; //or Array<number>

export type E = [number, string];

export type F = {
  name: string;
  phno: number;
};

// or

// interface F {
//   name: string;
//   phno: number;
// }

const a: A = "It's a string";

const b: B = 12345;

const c: C = true;

const d: D = [1, 2, 3, 4, 5];

const e: E = [1, "A"];

const f: F = {
  name: "varun bardwaj",
  phno: 1234567890,
};
