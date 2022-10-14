import { useRef } from "react";
import { Box, Pagination as Paginate } from "@mantine/core";
import { usePaginationSetter } from "../atoms/posts";

function Pagination() {
  const rendered = useRef(0);

  const rerender = () => {
    rendered.current += 1;
    console.log(`Paginate Component re-rendered: ${rendered.current} times.`);
  };

  rerender();

  const RenderPagination = () => {
    const setPagination = usePaginationSetter();
    const paginate = (page: number) => {
      setPagination(page);
    };
    return (
      <Paginate
        color="dark"
        onChange={(pageSelected) => paginate(pageSelected)}
        total={Math.floor(100 / 6)}
      />
    );
  };

  return (
    <Box mx={50} mt={70} sx={{ display: "flex", justifyContent: "end" }}>
      <RenderPagination />
    </Box>
  );
}

export default Pagination;
