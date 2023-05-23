import FormRegister from "../components/FormRegister";
import RegisterHeader from "../components/RegisterHeader";

import RegisterContextProvider from "../hook/RegisterProvider";
import RegisterFooter from "../components/RegisterFooter";

const Register = () => {
  return (
    <RegisterContextProvider>
      <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterHeader />
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <FormRegister />
          </div>
        </div>
        <RegisterFooter />
      </div>
    </RegisterContextProvider>
  );
};
export default Register;
