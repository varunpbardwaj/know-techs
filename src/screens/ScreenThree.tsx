import { useNavigate } from "react-router-dom";

function ScreenThree() {
  const route = useNavigate();
  return (
    <div className="App">
      <div>Screen Three</div>
      <button
        onClick={() => {
          route("/screen-two");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default ScreenThree;
