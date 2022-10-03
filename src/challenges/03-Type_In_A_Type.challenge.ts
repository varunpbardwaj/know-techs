export {};
import { assert, Equals } from "tsafe";
import { Developer as DEV} from "../solutions/03-Type_In_A_Type.solution";

//Verify the variable in line:17 and assign the type to the prop bugs in line:14
interface Bug {
  id: number;
  title: string;
  createdOn: Date;
  status: string;
}

interface Developer {
  name: string;
  team: string;
  bugs: ;
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

assert<Equals<Developer, DEV>>();
