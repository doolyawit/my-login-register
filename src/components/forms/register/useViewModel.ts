import { useNavigate } from "react-router-dom";
import { validateFormValues } from "../../../validations/validateRegister";
import newUserSchema from "../../../schemas/UserRegister";
import { UserRegister } from "../../../services/datasources/interfaces/user";

export const useViewModel = () => {
  const validate = validateFormValues(newUserSchema);
  const navigate = useNavigate();
  const handleSubmit = (values: UserRegister) => {
    window.alert("Sign Up Successfully");
    console.log("values: ", values);
    navigate("/login");
  };
  return {
    validate,
    handleSubmit,
  };
};
