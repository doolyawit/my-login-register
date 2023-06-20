import { Field, useField } from 'react-final-form';
import { InputFieldProps } from '../interfaces/form';

const InputField = ({
  name,
  component,
  type,
  placeholder,
  defaultValue,
  children,
}: InputFieldProps) => {
  const { input, meta } = useField(name);

  return (
    <div className="mt-2">
      <Field
        {...input}
        component={component}
        type={type}
        className="placeholder:text-gray-350 block w-full rounded-full border-0 p-2 text-xs shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        defaultValue={defaultValue}
      >
        {children}
      </Field>
      {meta.submitFailed && meta.error && (
        <div className="mt-1 text-center text-xs font-semibold text-red">
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default InputField;
