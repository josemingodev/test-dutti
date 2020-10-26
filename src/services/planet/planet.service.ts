import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObjectHttpResponse} from '../../model/http/base/object.base.response';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }
  getPlanets(): Observable<ObjectHttpResponse<any>> {
    return this.http.get<ObjectHttpResponse<any>>(`/planets`);
  }

  getPagePlanets(url: string): Observable<ObjectHttpResponse<any>> {
    url = url.split('/').filter(function (item) {
      return item !== '';
    }).slice(-1)[0];
    return this.http.get<ObjectHttpResponse<any>>(`/planets` + url);
  }
}
