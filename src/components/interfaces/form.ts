import { SupportedInputs } from 'react-final-form';

export interface InputFieldProps {
  name: string;
  component: SupportedInputs;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  children?: JSX.Element;
}
export interface LabelProps {
  htmlFor: string;
  text: string;
}
export interface OptionFieldProps {
  value: string;
  text: string;
  disabled?: boolean;
}
