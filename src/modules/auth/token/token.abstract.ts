import {SessionStorageService} from '../../sessionStorage/session-storage.service';

export abstract class TokenAbstract {
  private userToken: string = null;

  constructor(private sessionStorageService: SessionStorageService) {
  }

  protected abstract getKeyToken(): string;

  protected abstract saveInSession(): boolean;

  setToken(token: string) {
    this.userToken = token;
    if (this.saveInSession()) {
      this.sessionStorageService.set(this.getKeyToken(), token);
    }
  }
  getToken(): any {
    if (!this.userToken) {
      if (this.sessionStorageService.get(this.getKeyToken())) {
        this.userToken = this.sessionStorageService.get(this.getKeyToken());
      }
    }

    return this.userToken;
  }
  removeItem() {
    if (this.saveInSession()) {
      this.sessionStorageService.delete(this.getKeyToken());
    }

    this.userToken = null;
  }
}
