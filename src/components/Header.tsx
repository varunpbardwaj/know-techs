import { useRef } from "react";
import { Box, Title } from "@mantine/core";

const Header = ({
  mode,
  setMode,
}: {
  mode: boolean;
  setMode: (m: (t: boolean) => boolean) => void;
}) => {
  const rendered = useRef(0);

  const rerender = () => {
    rendered.current += 1;
    console.log(`Header Component re-rendered: ${rendered.current} times.`);
  };

  rerender();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      px={50}
      py={40}
    >
      <Title order={1}>REACT + JOTAI</Title>
      <Title
        order={2}
        sx={{ cursor: "pointer" }}
        onClick={() => setMode((t: boolean) => !t)}
      >
        {mode ? "LIGHT" : "DARK"}
      </Title>
    </Box>
  );
};

export default Header;
