import { cx } from "@emotion/css";
import { ButtonProps } from "./interfaces/button";
const Button = ({ label, customizeStyle, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        customizeStyle,
        `flex items-center justify-center rounded-full`
      )}
    >
      {label}
    </button>
  );
};
export default Button;
