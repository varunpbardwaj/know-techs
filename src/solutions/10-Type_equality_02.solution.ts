export {};
import { assert, Equals } from "tsafe";

type Bug = {
  id: number;
  title: string;
  createdBy: string;
  owner: string;
  status: string;
};

type equality = Pick<Bug, "title" | "createdBy">;

assert<
  Equals<
    equality,
    {
      title: string;
      createdBy: string;
    }
  >
>();
