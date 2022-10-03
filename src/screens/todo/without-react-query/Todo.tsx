import { useState, useEffect } from "react";
import { Stack, Button } from "@mantine/core";
import Todo from "../../../components/Todos";
import { Todo as TodoProps } from "../../../props";
import Heading from "../../../components/Heading";

import {
  deleteTodo,
  getTodos,
  postTodo,
  updateTodo,
} from "../../../api/without-react-query/todo";

import { useNavigate } from "react-router-dom";

const Todos = () => {
  const route = useNavigate();

  const [todos, setTodos] = useState<
    | {
        id: string;
        todo: string;
        stale: boolean;
      }[]
    | []
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const todos = await getTodos();
      const res = await todos.json();
      if (todos.status === 200) {
        setTodos(res);
      }
      setLoading(false);
    })();
  }, []);

  const addTodo = async () => {
    setLoading(true);
    const id = todos.length
      ? (Number(todos[todos.length - 1].id) + 1).toString()
      : "1";
    const todo = {
      id: id,
      todo: `todo-${id}`,
      stale: false,
    };
    await postTodo(todo);
    setTodos([...todos, todo]);
    setLoading(false);
  };

  const completeTodo = async (body: TodoProps) => {
    setLoading(true);
    const todo = body;
    await updateTodo(todo);
    let updatedTodos = todos.map((todo) => {
      if (todo.id === body.id) {
        return { id: todo.id, todo: todo.todo, stale: true };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    setLoading(false);
  };

  const removeTodo = async (id: string) => {
    setLoading(true);
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    setLoading(false);
  };

  return (
    <Stack m={30}>
      <Heading title="Todo App" isLoading={loading} />
      <Todo
        todos={todos}
        isLoading={loading}
        onAdd={() => addTodo()}
        onComplete={(todo: TodoProps) => completeTodo(todo)}
        onDelete={(id: string) => {
          removeTodo(id);
        }}
      />
      <Button
        sx={{ width: "125px" }}
        mr={20}
        onClick={() => {
          route("/");
        }}
      >
        Go Back
      </Button>
    </Stack>
  );
};

export default Todos;
