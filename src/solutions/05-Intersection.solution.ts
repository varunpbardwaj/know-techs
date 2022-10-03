export {};

export interface Bug {
  id: number;
  title: string;
  createdOn: Date;
  status: string;
}

export interface Developer {
  name: string;
  team: string;
}

const dev: Developer & { bugs: Bug[] } = {
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
