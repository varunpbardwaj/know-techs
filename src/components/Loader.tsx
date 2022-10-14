import { LoadingOverlay } from "@mantine/core";
import { useLoaderGetter } from "../atoms/posts";

const Loader = () => {
  const loader = useLoaderGetter();
  return (
    <LoadingOverlay
      loaderProps={{
        size: "xl",
        color: "#ABABAB",
      }}
      visible={loader}
      overlayBlur={2}
    />
  );
};

export default Loader;
