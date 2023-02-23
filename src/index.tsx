/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { Provider } from "./StoreProvider";
import { App } from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Provider options={{ key: "persist:solidjs", storage: localStorage }}>
      <App />
    </Provider>
  ),
  root!
);
