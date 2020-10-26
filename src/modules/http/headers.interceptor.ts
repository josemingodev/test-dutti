import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = this.getHeaders();
    return next.handle(req.clone({setHeaders: headers}));
  }

  private getHeaders() {
    return {};
  }
}
