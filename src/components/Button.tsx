import { ButtonType } from "../props/button";

const Button = ({ children, onClick }: ButtonType) => {
  return (
    <button
      class="w-1/2 flex justify-center bg-dark-bg text-green-300 text-3xl outline-0 mt-5 px-5 py-3 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
