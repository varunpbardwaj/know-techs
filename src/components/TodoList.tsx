import { Icon } from "@iconify-icon/solid";
import { For, Show } from "solid-js";
import { todoIndexSignal } from "../signals/todoIndex";
import { todoInputSignal } from "../signals/todoInput";
import { useStoreContext } from "../StoreProvider";

export const TodoList = () => {
  const [get, set] = useStoreContext();
  const [todoIndex, setTodoIndex] = todoIndexSignal(-1);
  const [todoInput, setTodoInput] = todoInputSignal("");

  const todoClick = (i: number) => {
    setTodoIndex(i);
  };

  const onBlur = (i: number) => {
    const getTodos = [...get.todos];
    todoInput().trim() !== "" && (getTodos[i] = todoInput());
    set({ ...get.todos, todos: getTodos });
    setTodoInput("");
    setTodoIndex(-1);
  };

  const onChange = (
    e: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ) => {
    setTodoInput(e.currentTarget.value);
  };

  const onRemove = (i: number) => {
    const getTodos = [...get.todos];
    getTodos.splice(i, 1);
    set({ ...get.todos, todos: getTodos });
  };

  return (
    <Show when={get.todos.length > 0}>
      <For each={get.todos} fallback={<div>Loading...</div>}>
        {(item, i) => {
          return (
            <div class="flex justify-between text-xl font-semibold m-3">
              <Show when={todoIndex() !== i()}>
                <div class="cursor-pointer" onClick={() => todoClick(i())}>
                  {item}
                </div>
              </Show>
              <Show when={todoIndex() === i()}>
                <input
                  class="text-lg font-bold bg-dark-bg outline-none border-none"
                  autofocus
                  onBlur={() => onBlur(i())}
                  onChange={onChange}
                />
              </Show>
              <div
                class="text-2xl text-red-400 cursor-pointer"
                onClick={() => onRemove(i())}
              >
                <Icon icon="mdi:trash" />
              </div>
            </div>
          );
        }}
      </For>
    </Show>
  );
};
