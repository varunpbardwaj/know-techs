import { useEffect, useRef } from "react";
import { Box, Card, Title, Text } from "@mantine/core";
import { usePostGetter, usePaginationSetter } from "../atoms/posts";

function Post() {
  const rendered = useRef(0);

  const rerender = () => {
    rendered.current += 1;
    console.log(
      `Post Wrapper Component re-rendered: ${rendered.current} times.`
    );
  };

  rerender();

  const RenderPost = () => {
    const posts = usePostGetter();
    const setPagination = usePaginationSetter();

    useEffect(() => {
      setPagination(1);
    }, []);

    return (
      <>
        {posts.map((post, i) => (
          <Box py={10} id="card-layout" key={i}>
            <Card id="card" withBorder>
              <Title order={5} mb={10}>
                {post.title}
              </Title>
              <Text weight={200}>{post.body}</Text>
            </Card>
          </Box>
        ))}
      </>
    );
  };

  return (
    <Box>
      <Box px={50}>
        <Title mb={10}>Posts</Title>
        <Box id="card-wrapper">
          <RenderPost />
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
