declare type DatabaseProperies = {
  _id: string;
  createdAt: string;
};

declare type SuccessfulResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  message: string;
  code: number;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
