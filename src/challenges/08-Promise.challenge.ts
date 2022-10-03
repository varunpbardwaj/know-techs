export {};

type Comment = {
  id: number;
  comment: string;
};

const readComment = async (): Comment => {
  return {
    id: 1,
    comment: "Random Comment",
  };
};
