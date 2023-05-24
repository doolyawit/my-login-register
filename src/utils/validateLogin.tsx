import { UserLogin } from "../schemas/UserLogin";
import { setIn } from "final-form";
import * as yup from "yup";

const validateFormValues =
  (schema: yup.ObjectSchema<UserLogin>) => async (values: UserLogin) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      const validationError = err as yup.ValidationError;
      const errors = validationError.inner.reduce((formError, innerError) => {
        const path = innerError.path !== undefined ? innerError.path : "";
        return setIn(formError, path, innerError.message);
      }, {});

      return errors;
    }
  };
export const handleSubmit = async (values: UserLogin) => {
  if (
    (values.email === "doolyawit.y@20scoops.net" &&
      values.password === "Diw0638051541") ||
    (values.email === "test@test.com" && values.password === "Test1234")
  ) {
    console.log(
      `Login Successfully ✅ 👀 
        Username : ${values.email} 
        Password: ${values.password}`
    );
    window.alert(`Login Successfully ✅ 👀 
      Username : ${values.email} 
      Password: ${values.password}`);
  } else {
    console.log("Login Failed : Invalid Username or Password ❌ 🙅🏻‍♀️");
    window.alert("Login Failed : Invalid Username or Password ❌ 🙅🏻‍♀️");
  }
};

export default validateFormValues;
