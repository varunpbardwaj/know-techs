import { Stack, Button } from "@mantine/core";
import Todo from "../../../components/Todos";
import Heading from "../../../components/Heading";
import { Todo as TodoProps } from "../../../props";

import useGetTodosQuery from "../../../api/with-react-query/useGetTodosQuery";
import useAddTodoMutation from "../../../api/with-react-query/useAddTodoMutation";
import useUpdateTodoMutation from "../../../api/with-react-query/useUpdateTodoMutation";
import useDeleteTodoMutation from "../../../api/with-react-query/useDeleteTodoMutation";

import { useNavigate } from "react-router-dom";

const Todos = () => {
  const route = useNavigate();

  const { data: getTodosQueryData, isLoading: getTodosQueryLoading } =
    useGetTodosQuery();

  const { mutate: addTodoMutate, isLoading: addTodoMutationLoading } =
    useAddTodoMutation();

  const { mutate: updateTodoMutate, isLoading: updateTodoMutationLoading } =
    useUpdateTodoMutation();

  const { mutate: deleteTodoMutate, isLoading: deleteTodoMutationLoading } =
    useDeleteTodoMutation();

  return (
    <Stack m={30}>
      <Heading
        title="Todo App with React-Query"
        isLoading={
          getTodosQueryLoading ||
          addTodoMutationLoading ||
          updateTodoMutationLoading ||
          deleteTodoMutationLoading
        }
      />
      <Todo
        todos={getTodosQueryData || []}
        isLoading={getTodosQueryLoading}
        onAdd={() => {
          const id = getTodosQueryData.length
            ? (
                Number(getTodosQueryData[getTodosQueryData.length - 1].id) + 1
              ).toString()
            : "1";
          addTodoMutate({ id: id, todo: `todo-${id}`, stale: false });
        }}
        onComplete={(todo: TodoProps) => updateTodoMutate(todo)}
        onDelete={(id: string) => {
          deleteTodoMutate(id);
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
