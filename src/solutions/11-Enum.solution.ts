export {};

export enum Confirm {
  CONTINUE = "Continue",
  CANCEL = "Cancel",
}

const prompt = (input: string) => {
  console.log(`You clicked on ${input}!`);
};

prompt(Confirm.CONTINUE);
