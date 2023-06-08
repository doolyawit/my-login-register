import { Form } from "react-final-form";
import InputField from "../InputField";
import OptionField from "../OptionField";
import Button from "../../Button";
import InputBox from "../InputBox";
import Label from "../Label";
import { useViewModel } from "./useViewModel";

const FormRegister = () => {
  const { validate, handleSubmit } = useViewModel();
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
          <InputBox>
            <Label htmlFor="name" text="Name" />
            <InputField
              name="name"
              component="input"
              type="text"
              placeholder="Ex. John"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="surname" text="Surname" />
            <InputField
              name="surname"
              component="input"
              type="text"
              placeholder="Ex. Mayer"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="gender" text="Gender" />
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
          </InputBox>
          <InputBox>
            <Label htmlFor="email" text="Email" />
            <InputField
              name="email"
              component="input"
              type="text"
              placeholder="Example@gmail.com"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="password" text="Password" />
            <InputField
              name="password"
              component="input"
              type="password"
              placeholder="Must contain uppercase & number "
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="confirmPassword" text="Confirm Password" />
            <InputField
              name="confirmPassword"
              component="input"
              type="password"
              placeholder="Confirm Password"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="phone" text="Phone Number" />
            <InputField
              name="phone"
              component="input"
              type="text"
              placeholder="(+66)"
            />
          </InputBox>
          <div>
            <Button
              word="Register !"
              cusStyle="mx-auto my-10 flex w-1/2	 justify-center rounded-full bg-violet px-3 py-1.5 text-sm font-extrabold leading-6 text-yellow shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            />
          </div>
        </form>
      )}
    />
  );
};
export default FormRegister;
