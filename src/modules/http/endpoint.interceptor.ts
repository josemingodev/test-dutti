import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppConstants} from '../../constants/app.constants';
import {LoaderService} from '../../app/components/common/layouts/loader/loader.service';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable()
export class EndpointInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/assets')) {
      return next.handle(req);
    }
    req = req.clone({
      url: AppConstants.endpoint + req.url
    });
    this.loaderService.show();
    return next.handle(req).pipe(
      tap(() => {
      }),
      finalize(() => this.loaderService.hide())
    );
  }
}
