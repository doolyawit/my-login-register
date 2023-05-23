import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../hook/LoginProvider";

const LoginFooter = () => {
  const context = useContext(LoginContext);

  return (
    <div className="mt-10">
      {context.message}{" "}
      <Link to={`${context.link}`} className="font-bold text-red hover:text-lg">
        {context.aMessage}
      </Link>
    </div>
  );
};

export default LoginFooter;
