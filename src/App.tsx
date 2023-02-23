import Button from "./components/Button";
import { Icon } from "./components/Icon";
import { TodoDefault } from "./components/TodoDefault";
import { TodoList } from "./components/TodoList";
import { useStoreContext } from "./StoreProvider";

export const App = () => {
  const [get, set] = useStoreContext();

  return (
    <div class="flex flex-col items-center pt-5">
      <span class="my-10 text-2xl font-semibold">Todo App</span>
      <div class="bg-dark-bg text-light-bg w-1/2 px-8 py-4 min-h-fit rounded">
        <TodoDefault />
        <TodoList />
      </div>
      <Button
        onClick={() => {
          set({ ...get, todos: [...get.todos, "new todo"] });
        }}
      >
        <Icon icon="material-symbols:add-circle-outline-rounded" />
      </Button>
    </div>
  );
};
