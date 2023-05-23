import { useContext } from "react";
import { LoginContext } from "../hook/LoginProvider";

const LoginHeader = () => {
  const context = useContext(LoginContext);

  return (
    <>
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-green">
        {context.title}
      </h2>
      <h3 className="mt-7 text-green">{context.subTitle}</h3>
    </>
  );
};

export default LoginHeader;
