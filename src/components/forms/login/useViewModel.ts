import { useNavigate } from 'react-router-dom';
import userSchema from '../../../schemas/UserLogin';
import validateFormValues from '../../../validations/validateLogin';
import { useAuth } from '../../../hooks/useAuth';
import { useMemo, useState } from 'react';
import UserServiceMock from '../../../services/datasources/mocks/user';
import { UserRepository } from '../../../services/user';
import {
  UserLogin,
  UserRepositoryAble,
} from '../../../services/datasources/interfaces/user';
import { PRIVATE_PATH } from '../../../constants/path';

export const useViewModel = () => {
  const validate = validateFormValues(userSchema);
  const navigate = useNavigate();
  const auth = useAuth();
  const userService: UserRepositoryAble = useMemo(() => {
    return new UserRepository(new UserServiceMock());
  }, []);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const handleSubmit = async (values: UserLogin) => {
    userService
      .signIn(values)
      .then((user) => {
        console.log('response:', user);
        auth.setCredential(user);
        navigate(PRIVATE_PATH.HOME, { replace: true });
      })
      .catch((error) => {
        console.error('err: ', error);
        setErrorMessage(error.message);
      });
  };
  return {
    validate,
    errorMessage,
    handleSubmit,
  };
};
