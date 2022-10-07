// import { Stack, Button, Space } from "@mantine/core";
// import Todo from "./components/Todo";
// import Heading from "./components/Heading";
// import useZustandStore from "./store";
// import shallow from "zustand/shallow";

// export type Todo = {
//   id: string;
//   todo: string;
//   stale: boolean;
// };

// const RenderAddButton = () => {
//   const addTodos = useZustandStore((state) => state.addTodos, shallow);
//   return (
//     <Button sx={{ width: "180px" }} onClick={addTodos}>
//       Add Todo {<Space w={10} />} ✚
//     </Button>
//   );
// };

// const Todos = () => {
//   const RenderTodoApp = () => {
//     const todos: Todo[] | [] = useZustandStore((state) => state.todos, shallow);
//     const completeTodos = useZustandStore(
//       (state) => state.completeTodos,
//       shallow
//     );
//     const removeTodos = useZustandStore((state) => state.removeTodos, shallow);
//     return (
//       <Todo
//         todos={todos}
//         onComplete={(todo: Todo) => {
//           completeTodos(todo.id);
//         }}
//         onDelete={(id: string) => {
//           removeTodos(id);
//         }}
//       />
//     );
//   };

//   return (
//     <Stack m={30}>
//       <Heading title="Todo App" />
//       <RenderTodoApp />
//       <RenderAddButton />
//     </Stack>
//   );
// };

// export default Todos;

import { Stack } from "@mantine/core";
import Todo from "./components/Todo";
import Heading from "./components/Heading";
import useZustandStore from "./store";

export type Todo = {
  id: string;
  todo: string;
  stale: boolean;
};

const Todos = () => {
  const todos: Todo[] | [] = useZustandStore((state) => state.todos);
  const addTodos = useZustandStore((state) => state.addTodos);
  const completeTodos = useZustandStore((state) => state.completeTodos);
  const removeTodos = useZustandStore((state) => state.removeTodos);

  return (
    <Stack m={30}>
      <Heading title="Todo App" />
      <Todo
        todos={todos}
        onAdd={() => addTodos()}
        onComplete={(todo: Todo) => {
          completeTodos(todo.id);
        }}
        onDelete={(id: string) => {
          removeTodos(id);
        }}
      />
    </Stack>
  );
};

export default Todos;
