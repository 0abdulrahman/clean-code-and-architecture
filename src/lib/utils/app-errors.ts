export class AuthenticationError extends Error {
  public statusCode?: number;

  constructor(message: string, statusCode?: number, options?: ErrorOptions) {
    super(message, options);

    this.statusCode = statusCode;
  }
}

export class AuthorizationError extends Error {
  public statusCode?: number;

  constructor(message: string, statusCode?: number, options?: ErrorOptions) {
    super(message, options);

    this.statusCode = statusCode;
  }
}

export class AppError extends Error {
  public statusCode?: number;

  constructor(message: string, statusCode?: number, options?: ErrorOptions) {
    super(message, options);

    this.statusCode = statusCode;
  }
}
