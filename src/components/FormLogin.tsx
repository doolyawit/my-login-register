import { Field, Form } from "react-final-form";
import validateFormValues, { handleSubmit } from "../utils/login";
import userSchema from "../schemas/UserLogin";

const validate = validateFormValues(userSchema);
const FormLogin = () => {
  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={{ email: "", password: "" }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="email"
                component="input"
                type="email"
                className="text-gray block w-full rounded-full border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Example@gmail.com"
              />
              <Field name="email" subscription={{ error: true, touched: true }}>
                {({ meta: { error, touched } }) => (
                  <div className="mt-1 text-right text-sm font-bold text-red ">
                    {touched && error}
                  </div>
                )}
              </Field>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="password"
                component="input"
                type="password"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                placeholder="Type your password"
              />
              <Field
                name="password"
                subscription={{ error: true, touched: true }}
              >
                {({ meta: { error, touched } }) => (
                  <div className="mt-1 text-right text-sm font-bold text-red">
                    {touched && error}
                  </div>
                )}
              </Field>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-brown px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
