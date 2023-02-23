import { Accessor, createSignal, Setter } from "solid-js";

export const todoIndexSignal = (
  intitalValue: number
): [todoIndex: Accessor<number>, setTodoIndex: Setter<number>] => {
  const [todoIndex, setTodoIndex] = createSignal(intitalValue);
  return [todoIndex, setTodoIndex];
};
