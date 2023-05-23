import { Field, Form } from "react-final-form";
import { handleSubmit, validateFormValues } from "../utils/register";
import newUserSchema from "../schemas/UserRegister";

const validate = validateFormValues(newUserSchema);

const FormRegister = () => {
  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={{
        name: "",
        surname: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Name
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="name"
                component="input"
                type="text"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ex. John"
              />
              <Field name="name" subscription={{ error: true, touched: true }}>
                {({ meta: { error, touched } }) => (
                  <div className="mt-1 text-right text-sm font-bold text-red">
                    {touched && error}
                  </div>
                )}
              </Field>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="surname"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Surname
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="surname"
                component="input"
                type="text"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ex. Mayer"
              />
              <Field
                name="surname"
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="gender"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Gender
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="gender"
                component="select"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="not specify">Not Specify</option>
              </Field>
              <Field
                name="gender"
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
                type="text"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Example@gmail.com"
              />
              <Field name="email" subscription={{ error: true, touched: true }}>
                {({ meta: { error, touched } }) => (
                  <div className="mt-1 text-right text-sm font-bold text-red">
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
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Must contain uppercase & number "
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="confirmPassword"
                component="input"
                type="password"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Confirm Password"
              />
              <Field
                name="confirmPassword"
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-bold leading-6 text-brown"
              >
                Phone Number
              </label>
            </div>
            <div className="mt-2">
              <Field
                name="phone"
                component="input"
                type="text"
                className="block w-full rounded-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="(+66)"
              />
              <Field name="phone" subscription={{ error: true, touched: true }}>
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
              className="flex w-full justify-center rounded-md bg-brown p-2 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register !
            </button>
          </div>
        </form>
      )}
    />
  );
};
export default FormRegister;
