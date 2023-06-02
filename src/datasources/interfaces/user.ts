export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  name: string;
  surname: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}
