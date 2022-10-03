export {};
import { assert, Equals } from "tsafe";
import {
  Bug as BUG,
  Developer as DEV,
} from "../solutions/05-Intersection.solution";

//Verify the variable in line:17
interface Bug {
  id: number;
  title: string;
  createdOn: Date;
  status: string;
}

interface Developer {
  name: string;
  team: string;
}

const dev: Developer = {
  name: "Varun Bardwaj",
  team: "Random Team",
  bugs: [
    {
      id: 1,
      title: "Random title",
      createdOn: new Date(),
      status: "Random status",
    },
  ],
};

assert<Equals<Bug, BUG>>();
assert<Equals<Developer, DEV>>();
