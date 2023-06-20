import { UserRegister } from '../services/datasources/interfaces/user';
import { setIn } from 'final-form';
import * as yup from 'yup';

export const validateFormValues =
  (schema: yup.ObjectSchema<UserRegister>) => async (values: UserRegister) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      const validationError = err as yup.ValidationError;
      const errors = validationError.inner.reduce((formError, innerError) => {
        const path = innerError.path !== undefined ? innerError.path : '';
        return setIn(formError, path, innerError.message);
      }, {});

      return errors;
    }
  };
