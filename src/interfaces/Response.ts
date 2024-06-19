export interface APIResponse<T> {
  message: string;
  status: boolean;
  data: T;
}
