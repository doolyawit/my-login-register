import { Form } from 'react-final-form';
import InputField from '../InputField';
import Button from '../../Button';
import Label from '../Label';
import InputBox from '../InputBox';
import ErrorBox from '../ErrorBox';
import { useViewModel } from './useViewModel';

const FormLogin = () => {
  const { validate, errorMessage, handleSubmit } = useViewModel();
  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      initialValues={{
        email: '',
        password: '',
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputBox>
            <Label htmlFor="email" text="Email" />
            <InputField
              name="email"
              component="input"
              type="string"
              placeholder="Example@gmail.com"
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="password" text="Password" />
            <InputField
              name="password"
              component="input"
              type="password"
              placeholder="Type your password"
            />
          </InputBox>

          <div>
            <Button
              label="Login Now!"
              customizeStyle="mx-auto mb-2 sm:my-5 w-1/2 bg-violet px-3 py-1.5 text-sm font-extrabold leading-6 text-yellow shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            />
          </div>
          {errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
        </form>
      )}
    />
  );
};
export default FormLogin;
