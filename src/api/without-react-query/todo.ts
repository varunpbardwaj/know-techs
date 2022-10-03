import { url } from "../config";
import { Todo as TodoProps } from "../../props";

const getTodos = async () => {
  const todos = await fetch(url);
  return todos;
};

const postTodo = async (body: TodoProps) => {
  const todos = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return todos;
};

const updateTodo = async (body: TodoProps) => {
  const todos = await fetch(`${url}/${body.id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return todos;
};

const deleteTodo = async (id: string) => {
  const todos = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return todos;
};

export { getTodos, postTodo, updateTodo, deleteTodo };
