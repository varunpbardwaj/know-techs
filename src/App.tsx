import Post from "./components/Post";
import Loader from "./components/Loader";
import Paginate from "./components/Paginate";
import "./app.css";

function App() {
  return (
    <>
      <Post />
      <Loader />
      <Paginate />
    </>
  );
}

export default App;
