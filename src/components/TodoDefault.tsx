import { Show } from "solid-js";
import { useStoreContext } from "../StoreProvider";

export const TodoDefault = () => {
  const [get] = useStoreContext();

  return (
    <Show when={get.todos.length === 0}>
      <div class="text-xl font-semibold">No todos found!</div>
    </Show>
  );
};
