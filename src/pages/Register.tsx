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
      <div className="flex min-h-full flex-1 flex-col justify-center  rounded-2xl bg-white px-6 py-12 drop-shadow-2xl backdrop-blur-lg lg:px-8">
        <Title title="Sign Up" />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Header mode={RegisterContext} />
          <RegisterEmoji w="100" h="100" />
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormRegister />
          </div>
        </div>
        <Footer mode={RegisterContext} />
      </div>
    </RegisterContextProvider>
  );
};
export default Register;
