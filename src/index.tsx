import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./screens";
import TodoAppWRQ from "./screens/todo/without-react-query/Todo";
import TodoAppRQ from "./screens/todo/with-react-query/Todo";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/todo-rq" element={<TodoAppRQ />} />
        <Route path="/todo-wrq" element={<TodoAppWRQ />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
