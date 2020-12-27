export interface Resp<T> {
  code: number;
  message: string;
  data: T;
}
