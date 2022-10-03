import { Stack, Title, Space, Box, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const route = useNavigate();

  return (
    <Stack m={50}>
      <Title align="center">Screens</Title>
      <Space h={20} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ width: "300px" }}
          mr={20}
          onClick={() => {
            route("/todo-wrq");
          }}
        >
          Todo App without React-Query
        </Button>
        <Button
          sx={{ width: "300px" }}
          onClick={() => {
            route("/todo-rq");
          }}
        >
          Todo App with React-Query
        </Button>
      </Box>
    </Stack>
  );
};

export default Index;
