import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getAuth from "../auth/getAuth";

function ScreenOne() {
  const route = useNavigate();
  useEffect(() => {
    (async () => {
      const getPromiseAuth = await getAuth();
      if (getPromiseAuth) {
        route("/screen-two");
      }
    })();
  }, []);
  return (
    <div className="App">
      <div>Screen One</div>
      <button
        onClick={() => {
          fetch("http://localhost:3000/login", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isAuthenticated: true }),
          })
            .then((res) => res.json())
            .then(() => {
              route("/screen-two");
            });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default ScreenOne;
