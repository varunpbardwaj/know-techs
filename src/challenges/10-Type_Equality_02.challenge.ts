export {};
import { assert, Equals } from "tsafe";

type Bug = {
  id: number;
  title: string;
  createdBy: string;
  owner: string;
  status: string;
};

//Include only title and createdBy from type Bug
type equality = never;

assert<
  Equals<
    equality,
    {
      title: string;
      createdBy: string;
    }
  >
>();
