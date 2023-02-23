import { Accessor, createSignal, Setter } from "solid-js";

export const todoInputSignal = (
  intitalValue: string
): [todoInput: Accessor<string>, setTodoInput: Setter<string>] => {
  const [todoInput, setTodoInput] = createSignal(intitalValue);
  return [todoInput, setTodoInput];
};
