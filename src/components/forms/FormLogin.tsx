import { Form } from "react-final-form";
import validateFormValues from "../../validations/validateLogin";
import userSchema, { UserLogin } from "../../schemas/UserLogin";
import InputField from "./InputField";

const validate = validateFormValues(userSchema);

const handleLogin = async (
  values: UserLogin,
  callback: {
    onSuccess: () => void;
    onFailure: () => void;
  }
) => {
  if (
    (values.email === "doolyawit.y@20scoops.net" &&
      values.password === "Diw0638051541") ||
    (values.email === "test@test.com" && values.password === "Test1234")
  ) {
    callback.onSuccess?.();
  } else {
    callback.onFailure?.();
  }
};

const FormLogin = () => {
  return (
    <Form
      onSubmit={(values) => {
        handleLogin(values, {
          onSuccess: () => {
            console.log(
              `Login Successfully ✅ 👀 
              Username : ${values.email} 
              Password: ${values.password}`
            );
            window.alert(`Login Successfully ✅ 👀 
              Username : ${values.email} 
              Password: ${values.password}`);
          },
          onFailure: () => {
            console.log("Login Failed : Invalid Username or Password ❌ 🙅🏻‍♀️");
            window.alert("Login Failed : Invalid Username or Password ❌ 🙅🏻‍♀️");
          },
        });
      }}
      validate={validate}
      initialValues={{ email: "", password: "" }}
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
                type="email"
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
        </form>
      )}
    />
  );
};
export default FormLogin;
