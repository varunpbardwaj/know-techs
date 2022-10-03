import { url } from "../config";
import { useQuery } from "@tanstack/react-query";

const fetchTodo = async () => {
  const todos = await fetch(url);
  const res = await todos.json();
  return res;
};

const useGetTodosQuery = () => {
  return useQuery(["todos"], () => fetchTodo());
};

export default useGetTodosQuery;
