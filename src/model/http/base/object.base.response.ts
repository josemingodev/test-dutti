import {BasicHttpResponse} from './basic.base.response';

export class ObjectHttpResponse<T> extends BasicHttpResponse {
  results: T;

  constructor(count: number, next: string, previous: string, results: T) {
    super(next, previous, count);
    this.results = results;
  }
}
