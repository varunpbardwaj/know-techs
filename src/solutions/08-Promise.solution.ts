export {};

type Comment = {
  id: number;
  comment: string;
};

const readComment = async (): Promise<Comment> => {
  return {
    id: 1,
    comment: "Random Comment",
  };
};
