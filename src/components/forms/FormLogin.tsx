import { Form } from "react-final-form";
import validateFormValues from "../../validations/validateLogin";
import userSchema from "../../schemas/UserLogin";
import { UserLogin } from "../../datasources/interfaces/user";
import InputField from "./InputField";
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";

const validate = validateFormValues(userSchema);
const FormLogin = () => {
  const { login, errorMessage } = useContext(AuthContext);

  const handleLogin = async (values: UserLogin) => {
    login(values);
  };

  return (
    <Form
      onSubmit={handleLogin}
      validate={validate}
      initialValues={{
        email: "",
        password: "",
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className=" block text-sm font-bold leading-6 text-blue"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="email"
                component="input"
                type="string"
                placeholder="Example@gmail.com"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6 text-blue"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="password"
                component="input"
                type="password"
                placeholder="Type your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mx-auto flex w-1/2 justify-center	 rounded-lg bg-violet px-3 py-1.5 text-sm font-semibold leading-6 text-yellow shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              Login Now !
            </button>
          </div>
          {errorMessage && (
            <div className=" mt-1 text-center text-sm font-semibold text-red">
              {errorMessage}
            </div>
          )}
        </form>
      )}
    />
  );
};
export default FormLogin;
