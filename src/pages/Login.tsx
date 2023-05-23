import FormLogin from "../components/FormLogin";
import LoginContextProvider from "../hook/LoginProvider";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";

const Login = () => {
  return (
    <LoginContextProvider>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginHeader />
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormLogin />
          </div>
        </div>
        <LoginFooter />
      </div>
    </LoginContextProvider>
  );
};

export default Login;
