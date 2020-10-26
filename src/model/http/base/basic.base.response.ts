export class BasicHttpResponse {
  next: string;
  previous: string;
  count: number;

  constructor(next: string, previous: string, count: number) {
    this.previous = previous;
    this.next = next;
    this.count = count;
  }
}
