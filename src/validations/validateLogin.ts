import { UserLogin } from "../services/datasources/interfaces/user";
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

export default validateFormValues;
