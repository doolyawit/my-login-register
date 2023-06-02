import { Form } from "react-final-form";
import { validateFormValues } from "../../validations/validateRegister";
import newUserSchema from "../../schemas/UserRegister";
import { UserRegister } from "../../datasources/interfaces/user";
import InputField from "./InputField";
import OptionField from "./OptionField";
import { AuthContext } from "../../authentication/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const validate = validateFormValues(newUserSchema);

const FormRegister = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleRegister = async (values: UserRegister) => {
    register(values);
    navigate("/login");
  };
  return (
    <Form
      onSubmit={handleRegister}
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
                className="block text-sm font-bold leading-6 text-blue"
              >
                Name
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="name"
                component="input"
                type="text"
                placeholder="Ex. John"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="surname"
                className="block text-sm font-bold leading-6 text-blue"
              >
                Surname
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="surname"
                component="input"
                type="text"
                placeholder="Ex. Mayer"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="gender"
                className="block text-sm font-bold leading-6 text-blue"
              >
                Gender
              </label>
            </div>
            <div className="mt-2">
              <InputField name="gender" component="select" defaultValue={""}>
                <>
                  <OptionField
                    value=""
                    text="Select your gender"
                    disabled={true}
                  />
                  <OptionField value="men" text="Men" />
                  <OptionField value="women" text="Women" />
                  <OptionField value="not specify" text="Not Specify" />
                </>
              </InputField>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-blue"
              >
                Email
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="email"
                component="input"
                type="text"
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
                placeholder="Must contain uppercase & number "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-bold leading-6 text-blue"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="confirmPassword"
                component="input"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-bold leading-6 text-blue"
              >
                Phone Number
              </label>
            </div>
            <div className="mt-2">
              <InputField
                name="phone"
                component="input"
                type="text"
                placeholder="(+66)"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" mx-auto flex w-1/2 justify-center	 rounded-lg bg-violet px-3 py-1.5 text-sm font-semibold leading-6 text-yellow shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
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
