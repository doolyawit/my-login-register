import ProductRemote from '../../productRemote';
import { UserLogin, User, UserServiceAble } from '../interfaces/user';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export class UserService extends ProductRemote implements UserServiceAble {
  reqSignIn(credential: UserLogin): Observable<User> {
    return from(this.getInstance().post<User>('/signin', credential)).pipe(
      map((res) => res.data)
    );
  }
}
