import { Title, Box } from "@mantine/core";

const Heading = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Title
        sx={(theme) => ({ fontWeight: 600, fontFamily: theme.fontFamily })}
      >
        {title}
      </Title>
    </Box>
  );
};

export default Heading;
