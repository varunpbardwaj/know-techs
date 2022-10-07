import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Todo = {
  id: string;
  todo: string;
  stale: boolean;
};

type State = {
  todos: Todo[] | [];
  name: string;
  addTodos: () => void;
  completeTodos: (id: string) => void;
  removeTodos: (id: string) => void;
};

const blacklist = ["name"];

const useZustandStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        todos: [],
        name: "Varun",
        addTodos: () =>
          set(
            (state: State) => {
              state.name += state.name;
              (state.todos as unknown as Todo[]).push({
                id: state.todos.length
                  ? (
                      Number(state.todos[state.todos.length - 1].id) + 1
                    ).toString()
                  : "1",
                todo: state.todos.length
                  ? `todo-${Number(state.todos[state.todos.length - 1].id) + 1}`
                  : "todo-1",
                stale: false,
              });
            },
            false,
            "ADD_TODO"
          ),
        completeTodos: (payload: string) =>
          set(
            (state: State) => {
              const index = state.todos.findIndex(
                (todo) => todo.id === payload
              );
              state.todos[index].stale = !state.todos[index].stale;
            },
            false,
            "COMPLETE_TODO"
          ),
        removeTodos: (payload: string) =>
          set(
            (state: State) => {
              const index = state.todos.findIndex(
                (todo) => todo.id === payload
              );
              state.todos.splice(index, 1);
            },
            false,
            "REMOVE_TODO"
          ),
      })),
      {
        name: "zustand:todo",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !blacklist.includes(key))
          ),
      }
    )
  )
);

export default useZustandStore;
