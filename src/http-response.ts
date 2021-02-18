export class HttpResponse {
  data: [] | Record<any, any>;
  message: string;
  error: boolean;
  code: number;

  constructor(
    data: [] | Record<any, any> | void,
    message: string,
    error: boolean,
    code: number
  ) {
    this.data = data || [];
    this.message = message;
    this.error = error;
    this.code = code;
  }
}
