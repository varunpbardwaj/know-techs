import { useNavigate } from "react-router-dom";

function ScreenTwo() {
  const route = useNavigate();

  return (
    <div className="App">
      <div>Screen Two</div>
      <div>
        <button
          onClick={() => {
            route("/screen-one");
          }}
        >
          Route to Screen One
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            route("/screen-three");
          }}
        >
          Route to Screen Three
        </button>
      </div>
      <button
        onClick={() => {
          fetch("http://localhost:3000/login", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isAuthenticated: false }),
          })
            .then((res) => res.json())
            .then(() => {
              route("/screen-one");
            });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ScreenTwo;
