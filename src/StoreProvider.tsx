import { createContext, useContext, JSX } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { StateType } from "./props/state";

const store = ({
  key,
  storage = sessionStorage,
}: {
  key: string;
  storage?: Storage;
}) => {
  const defaultState = { todos: [] };

  const initialState = storage.getItem(key)
    ? JSON.parse(storage.getItem(key) as any)
    : defaultState;

  const [get, setter] = createStore<StateType>(initialState);

  const set = (arg: StateType) => {
    storage.setItem(key, JSON.stringify(arg));
    setter(arg);
  };
  return [get, set];
};

const Context = createContext<ReturnType<typeof store>>();

export const useStoreContext = () => {
  return useContext(Context) as [
    get: StateType,
    set: SetStoreFunction<StateType>
  ];
};

export function Provider(props: {
  children: JSX.Element;
  options: {
    key: string;
    storage?: Storage;
  };
}) {
  return (
    <Context.Provider value={store(props.options)}>
      {props.children}
    </Context.Provider>
  );
}
