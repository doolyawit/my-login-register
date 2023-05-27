import * as yup from "yup";

export interface UserLogin {
  email: string;
  password: string;
}

const userSchema: yup.ObjectSchema<UserLogin> = yup.object({
  email: yup
    .string()
    .required("⚠️ Please Input Email 💌")
    .email(" ⚠️ Invalid Email 🙅🏻‍♀️")
    .nonNullable(),
  password: yup
    .string()
    .min(8, "⚠️ Password must be at least 8 characters long 🔓")
    .matches(
      /[A-Z]/,
      "⚠️ Password must contain at least one uppercase character 🐘"
    )
    .nonNullable()
    .required("⚠️ Please Input Password 👀"),
});
export default userSchema;
