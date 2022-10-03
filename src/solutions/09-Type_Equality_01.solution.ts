export {};
import { assert, Equals } from "tsafe";

type Bug = {
  id: number;
  title: string;
  createdBy: string;
  owner: string;
  status: string;
};

type equality = Omit<Bug, "id">;

assert<
  Equals<
    equality,
    {
      title: string;
      createdBy: string;
      owner: string;
      status: string;
    }
  >
>();