export class RequestFailed {
  static readonly type = '[Shared] RequestFailed';

  constructor(public err: any) {
  }
}
