import {TokenAbstract} from './token.abstract';
import {JwtHelperService} from '@auth0/angular-jwt';
import {SessionStorageService} from '../../sessionStorage/session-storage.service';
import {UserLoginModel} from '../../../app/views/no-auth/login/user-login.model';

export class UserToken extends TokenAbstract {
  private static INSTANCE: UserToken;
  private keyStoreEvent = 'userToken';
  private jwtHelper = new JwtHelperService();

  static getInstance(): UserToken {
    if (!UserToken.INSTANCE) {
      UserToken.INSTANCE = new UserToken(new SessionStorageService());
    }
    return UserToken.INSTANCE;
  }

  getInfoCustomer(): UserLoginModel {
    const token = UserToken.getInstance().getToken();
    if (!token) {
      return null;
    }
    return this.jwtHelper.decodeToken(token).sub;
  }

  protected getKeyToken(): string {
    return this.keyStoreEvent;
  }

  protected saveInSession(): boolean {
    return true;
  }
}

