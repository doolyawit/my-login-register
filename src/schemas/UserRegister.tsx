import * as yup from "yup";

export interface UserRegister {
  name: string;
  surname: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
const newUserSchema = yup.object({
  name: yup.string().required("⚠️ Name is required "),
  surname: yup.string().required("⚠️ Surname is required "),
  gender: yup
    .string()
    .matches(/(men|women|not specify)/)
    .required("⚠️ Gender is required"),
  email: yup
    .string()
    .required("⚠️ Email is required")
    .email(" ⚠️ Invalid Email 🙅🏻‍♀️"),
  password: yup
    .string()
    .min(8, "⚠️ Password must be at least 8 characters long 🔓")
    .matches(
      /[A-Z]/,
      "⚠️ Password must contain at least one uppercase character 🐘"
    )
    .required("⚠️ Password is required"),
  confirmPassword: yup
    .string()
    .min(8, "⚠️ Password must be at least 8 characters long 🔓")
    .matches(
      /[A-Z]/,
      "⚠️ Password must contain at least one uppercase character 🐘"
    )
    .required("⚠️ Confirm password  is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  phone: yup.string().length(10).required("⚠️ Phone number is required"),
});
export default newUserSchema;
