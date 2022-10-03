import { useMutation, useQueryClient } from "@tanstack/react-query";
import { url } from "../config";
import { Todo as TodoProps } from "../../props";

const updateTodo = async (body: TodoProps) => {
  const todos = await fetch(`${url}/${body.id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const res = await todos.json();
  return res;
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body: TodoProps) => updateTodo(body), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
};

export default useUpdateTodoMutation;
