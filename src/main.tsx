import ReactDOM from "react-dom/client";
import App from "./Todo";
import { MantineProvider } from "@mantine/core";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif" }}
  >
    <App />
  </MantineProvider>
);
