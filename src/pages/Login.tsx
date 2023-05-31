import FormLogin from "../components/forms/FormLogin";
import LoginContextProvider, { LoginContext } from "../contexts/LoginProvider";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Title from "../components/layouts/Title";

const Login = () => {
  return (
    <LoginContextProvider>
      <div className="flex min-h-full flex-1 flex-col justify-center  rounded-2xl bg-white px-6 py-12 drop-shadow-2xl backdrop-blur-lg lg:px-8">
        <Title title="Sign In" />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Header mode={LoginContext} />
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormLogin />
          </div>
        </div>
        <Footer mode={LoginContext} />
      </div>
    </LoginContextProvider>
  );
};

export default Login;
