import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObjectHttpResponse} from '../../model/http/base/object.base.response';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) {
  }

  getStarships(): Observable<ObjectHttpResponse<any>> {
    return this.http.get<ObjectHttpResponse<any>>(`/starships`);
  }

  getPageStarships(url: string): Observable<ObjectHttpResponse<any>> {
    url = url.split('/').filter(function (item) {
      return item !== '';
    }).slice(-1)[0];
    return this.http.get<ObjectHttpResponse<any>>(`/starships` + url);
  }
}
