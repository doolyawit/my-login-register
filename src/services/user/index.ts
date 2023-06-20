import {
  UserLogin,
  UserRepositoryAble,
  UserServiceAble,
} from '../datasources/interfaces/user';

export class UserRepository implements UserRepositoryAble {
  private service: UserServiceAble;
  constructor(service: UserServiceAble) {
    this.service = service;
  }

  signIn = (credential: UserLogin) => {
    return this.service.reqSignIn(credential);
  };
}
