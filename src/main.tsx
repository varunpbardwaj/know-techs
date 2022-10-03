import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Index from "./index";
import { MantineProvider } from "@mantine/core";
import "./index.css";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={client}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif" }}
    >
      <Index />
      <ReactQueryDevtools position="bottom-right" />
    </MantineProvider>
  </QueryClientProvider>
);
