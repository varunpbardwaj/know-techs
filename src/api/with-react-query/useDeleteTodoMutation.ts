import { useMutation, useQueryClient } from "@tanstack/react-query";
import { url } from "../config";

const deleteTodo = async (id: string) => {
  const todos = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const res = await todos.json();
  return res;
};

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteTodo(id), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
};

export default useDeleteTodoMutation;
