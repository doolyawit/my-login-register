import ProductRemote from "../../productRemote";
import { UserLogin, User, UserServiceAble } from "../interfaces/user";

export class UserService extends ProductRemote implements UserServiceAble {
  reqSignIn(credential: UserLogin) {
    return new Promise<User>((resolve, reject) => {
      this.getInstance()
        .post<User>("/singin", credential)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}
