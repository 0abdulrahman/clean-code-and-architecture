import { AppError, AuthenticationError, AuthorizationError } from "./app-errors";

export default async function catchError<T, E extends new (message?: string) => AuthenticationError | AuthorizationError | AppError>(
  promise: Promise<APIResponse<T>>,
  errorsToCatch?: E[] | null
): Promise<[SuccessfulResponse<T>, null] | [null, InstanceType<E>]> {
  try {
    const data = await promise;

    if ("code" in data) {
      if (data.code === 401) throw new AuthenticationError(data.message, data.code);

      if (data.code === 403) throw new AuthorizationError(data.message, data.code);

      throw new AppError(data.message, data.code);
    }

    return [data, null];
  } catch (err) {
    const error = err as InstanceType<E>;

    if (!errorsToCatch) {
      return [null, error];
    }

    if (errorsToCatch.some((e) => error instanceof e)) {
      return [null, error];
    }

    throw error;
  }
}
