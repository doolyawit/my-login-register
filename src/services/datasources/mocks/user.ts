import { UserLogin, User, UserServiceAble } from "../interfaces/user";

class UserServiceMock implements UserServiceAble {
  reqSignIn(credential: UserLogin): Promise<User> {
    return new Promise<User>((resolve, _reject) => {
      resolve({
        email: credential.email,
        username: "admin mock",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx",
      });
    });
  }
}

export default UserServiceMock;
