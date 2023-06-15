import FormRegister from "../components/forms/register/FormRegister";
import Header from "../components/layouts/Header";
import RegisterContextProvider, {
  RegisterContext,
} from "../contexts/RegisterProvider";
import Footer from "../components/layouts/Footer";
import Title from "../components/layouts/Title";
import { RegisterEmoji } from "../components/svg/RegisterEmoji";

const Register = () => {
  return (
    <RegisterContextProvider>
      <div className="flex min-h-full flex-1 flex-col justify-center  rounded-2xl bg-white px-6 drop-shadow-2xl backdrop-blur-lg sm:py-12 lg:px-8">
        <Title title="Sign Up" />
        <div className="mx-auto w-full max-w-sm">
          <Header mode={RegisterContext} />
          <RegisterEmoji />
          <div className="sm:mx-auto sm:mt-5 sm:w-full sm:max-w-sm">
            <FormRegister />
          </div>
        </div>
        <Footer mode={RegisterContext} />
      </div>
    </RegisterContextProvider>
  );
};
export default Register;
