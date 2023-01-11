import ReactDOM from "react-dom/client";
import Generic from "./form/Generic";
import Library from "./form/Library";
import Reusable from "./form/Reusable";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Generic />
    <Library />
    <Reusable />
  </>
);
