import {Injectable} from '@angular/core';
import {AuthService} from '../../../../modules/auth/auth.service';
import {UserLoginModel} from './user-login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) {
  }

  loginUser(userLogin: UserLoginModel) {
    return new Promise((resolve, reject) => {
      this.authService.loginSimulator(userLogin)
        .then(result => {
          resolve(result);
        })
        .catch(reason => {
          reject(reason);
        });
    });
  }
}
