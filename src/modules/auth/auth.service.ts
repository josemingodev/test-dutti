import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserToken} from './token/user.token';
import {Router} from '@angular/router';
import {UserLoginModel} from '../../app/views/no-auth/login/user-login.model';
import {UserService} from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static subjectUser: BehaviorSubject<UserLoginModel> = new BehaviorSubject(new UserLoginModel('', ''));
  public static isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private jwtHelper = new JwtHelperService();
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
  }

  /*login(userLogin: UserLoginModel): Observable<ObjectHttpResponse<UserLoginModel>> {
    return this.http.post<ObjectHttpResponse<UserLoginModel>>('/login', userLogin).pipe(
      tap(object => {
        AuthService.isLoggedIn.next(true);
        UserToken.getInstance().setToken(object.result.token);
      })
    );
  }*/
  loginSimulator(userLogin: UserLoginModel) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.userService.getByUsername(userLogin.email)
          .then((user: UserLoginModel) => {
            if (user !== null && user.password === userLogin.password) {
              AuthService.isLoggedIn.next(true);
              UserToken.getInstance().setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNT' +
                'Y2MjQ4MTYwLCJleHAiOjE1NjYyNDk2MDB9.1olkcT6F_e2y2lN9zzHgFcBYnofnD8cmOb7EEKVjSdQ');
              resolve();
            } else {
              reject('Username or password is incorrect');
            }
          });
      }, 1200);
    });
  }

  isLogged(): boolean {
    const token = UserToken.getInstance().getToken();
    if (!token) {
      return false;
    }

    return this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    UserToken.getInstance().removeItem();
    AuthService.isLoggedIn.next(false);
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
