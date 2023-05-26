const OptionField = ({
  value,
  text,
  disabled,
}: {
  value: string;
  text: string;
  disabled?: boolean;
}) => {
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
