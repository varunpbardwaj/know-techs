import { useMutation, useQueryClient } from "@tanstack/react-query";
import { url } from "../config";
import { Todo as TodoProps } from "../../props";

const postTodo = async (body: TodoProps) => {
  const todos = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const res = await todos.json();
  return res;
};

const useAddMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body: TodoProps) => postTodo(body), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
};

export default useAddMutation;
