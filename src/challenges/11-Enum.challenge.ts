export {};
import { Confirm as CONFIRM } from "../solutions/11-Enum.solution";

//Create an enum by name Confirm to hold Continue and Cancel

const prompt = (input: string) => {
  console.log(`You clicked on ${input}!`);
};

prompt(Confirm.CONTINUE);

Confirm.CONTINUE === CONFIRM.CONTINUE;
Confirm.CANCEL === CONFIRM.CANCEL;
