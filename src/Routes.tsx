import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import ScreenOne from "./screens/ScreenOne";
import ScreenThree from "./screens/ScreenThree";
import ScreenTwo from "./screens/ScreenTwo";

export default function RouterTemplate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/screen-two" element={<ScreenTwo />} />
          <Route path="/screen-three" element={<ScreenThree />} />
        </Route>
        <Route path="*" element={<ScreenOne />} />
      </Routes>
    </BrowserRouter>
  );
}
