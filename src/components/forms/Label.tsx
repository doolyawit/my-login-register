import { LabelProps } from "../interfaces/form";
const Label = ({ htmlFor, text }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className=" block text-xs font-extrabold leading-6 text-blue sm:text-sm"
    >
      {text}
    </label>
  );
};
export default Label;
