import React from "react";

// import { Box, Text, Space, Title } from "@mantine/core";
// import { useAutoAnimate } from "@formkit/auto-animate/react";

// type Todo = {
//   id: string;
//   todo: string;
//   stale: boolean;
// };

// const Todos = ({
//   todos,
//   onComplete,
//   onDelete,
// }: {
//   todos: Todo[];
//   onComplete: (todo: Todo) => void;
//   onDelete: (id: string) => void;
// }) => {
//   const [parent] = useAutoAnimate();

//   return (
//     <div ref={parent as React.LegacyRef<HTMLDivElement>}>
//       {todos.length > 0 &&
//         todos.map((todo, index) => (
//           <Box key={index}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Title
//                 sx={(theme) => ({
//                   width: "100px",
//                   fontFamily: theme.fontFamily,
//                   opacity: todo.stale ? 0.2 : 1,
//                 })}
//                 order={4}
//               >
//                 {todo.todo}
//               </Title>
//               <Space w={30} />
//               <Title
//                 order={3}
//                 color="green.5"
//                 onClick={() => {
//                   onComplete({
//                     id: todo.id,
//                     todo: `todo-${todo.id}`,
//                     stale: true,
//                   });
//                 }}
//                 sx={{ cursor: "pointer" }}
//               >
//                 &#10003;
//               </Title>
//               <Space w={10} />
//               <Title
//                 order={3}
//                 color="red.5"
//                 onClick={() => onDelete(todo.id)}
//                 sx={{ cursor: "pointer" }}
//               >
//                 &#10761;
//               </Title>
//             </Box>
//             <Space h={10} />
//           </Box>
//         ))}
//       {todos.length === 0 && (
//         <Text sx={{ fontWeight: 600 }}>Start adding todo...</Text>
//       )}
//       <Space h={20} />
//     </div>
//   );
// };

// export default Todos;

import { Box, Text, Space, Title, Button } from "@mantine/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Todo = {
  id: string;
  todo: string;
  stale: boolean;
};

const Todos = ({
  todos,
  onComplete,
  onAdd,
  onDelete,
}: {
  todos: Todo[];
  onAdd: () => void;
  onComplete: (todo: Todo) => void;
  onDelete: (id: string) => void;
}) => {
  const [parent] = useAutoAnimate();
  const renderTodos = (todo: Todo[]) => {
    if (todo.length) {
      return todos.map((todo, index) => (
        <Box key={index}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Title
              sx={(theme) => ({
                width: "100px",
                fontFamily: theme.fontFamily,
                opacity: todo.stale ? 0.2 : 1,
              })}
              order={4}
            >
              {todo.todo}
            </Title>
            <Space w={30} />
            <Title
              order={3}
              color="green.5"
              onClick={() => {
                onComplete({
                  id: todo.id,
                  todo: `todo-${todo.id}`,
                  stale: true,
                });
              }}
              sx={{ cursor: "pointer" }}
            >
              &#10003;
            </Title>
            <Space w={10} />
            <Title
              order={3}
              color="red.5"
              onClick={() => onDelete(todo.id)}
              sx={{ cursor: "pointer" }}
            >
              &#10761;
            </Title>
          </Box>
          <Space h={10} />
        </Box>
      ));
    }
  };
  const renderNoTodo = (Todo: Todo[]) => {
    if (!Todo.length) {
      return <Text sx={{ fontWeight: 600 }}>Start adding todo...</Text>;
    }
  };

  return (
    <div ref={parent as React.LegacyRef<HTMLDivElement>}>
      {renderTodos(todos)}
      {renderNoTodo(todos)}
      <Space h={20} />
      <Button sx={{ width: "180px" }} onClick={onAdd}>
        Add Todo {<Space w={10} />} ✚
      </Button>
    </div>
  );
};

export default Todos;
