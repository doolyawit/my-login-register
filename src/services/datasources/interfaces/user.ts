import { Observable } from 'rxjs';

export interface UserLogin {
  email: string;
  password: string;
}
export interface User {
  username: string;
  email: string;
  token: string;
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
export interface UserServiceAble {
  reqSignIn(credential: UserLogin): Observable<User>;
}
export interface UserRepositoryAble {
  signIn: (credential: UserLogin) => Observable<User>;
}
