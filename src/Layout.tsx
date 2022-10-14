import { MantineProvider as ThemeProvider } from "@mantine/core";
import { useAtom } from "jotai";
import { theme } from "./atoms/theme";
import Header from "./components/Header";
import App from "./App";

function Layout() {
  const [mode, setMode] = useAtom(theme);
  return (
    <ThemeProvider
      theme={{
        fontFamily: "Inter, sans-serif",
        colorScheme: mode ? "dark" : "light",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Header mode={mode} setMode={setMode} />
      <App />
    </ThemeProvider>
  );
}

export default Layout;
