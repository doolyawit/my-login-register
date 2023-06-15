import { OptionFieldProps } from "../interfaces/form";

const OptionField = ({ value, text, disabled }: OptionFieldProps) => {
  if (disabled) {
    return (
      <option value={value} disabled>
        {text}
      </option>
    );
  } else {
    return <option value={value}>{text}</option>;
  }
};
export default OptionField;
