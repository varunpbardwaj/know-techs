import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import getAuth from "./getAuth";

const ProtectedRoute = () => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    (async () => {
      setAuth(await getAuth());
    })();
  }, [auth]);

  return auth ? <Outlet /> : <Navigate to="/screen-one" />;
};

export default ProtectedRoute;
