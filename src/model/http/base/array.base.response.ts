import {BasicHttpResponse} from './basic.base.response';

export class ArrayHttpResponse<T> extends BasicHttpResponse {
  results: [T];
}
