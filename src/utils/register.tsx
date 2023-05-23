import { UserRegister } from "../schemas/UserRegister";
import { setIn } from "final-form";
import * as yup from "yup";

export const validateFormValues =
  (schema: yup.ObjectSchema<UserRegister>) => async (values: UserRegister) => {
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
export const handleSubmit = async (values: UserRegister) => {
  console.log(`Register Successfully! ✅ 👀
    Name : ${values.name}
    Surname : ${values.surname}
    Gender : ${values.gender}
    Email : ${values.email}
    Password : ${values.password}
    Phone Number : ${values.phone}`);

  window.alert(`Register Successfully! ✅ 👀
    Name : ${values.name}
    Surname : ${values.surname}
    Gender : ${values.gender}
    Email : ${values.email}
    Password : ${values.password}
    Phone Number : ${values.phone}`);
};
