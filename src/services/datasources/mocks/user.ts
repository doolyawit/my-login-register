import { Observable, of } from 'rxjs';
import { UserLogin, User, UserServiceAble } from '../interfaces/user';

class UserServiceMock implements UserServiceAble {
  reqSignIn(credential: UserLogin): Observable<User> {
    return of({
      email: credential.email,
      username: 'admin mock',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx',
    });
  }
}

export default UserServiceMock;
