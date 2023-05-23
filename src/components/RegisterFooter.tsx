import { Link } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext } from "../hook/RegisterProvider";
const RegisterFooter = () => {
  const context = useContext(RegisterContext);

  return (
    <div className="mt-10">
      {context.message}{" "}
      <Link to={`${context.link}`} className="font-bold text-red hover:text-lg">
        {context.aMessage}
      </Link>
    </div>
  );
};

export default RegisterFooter;
