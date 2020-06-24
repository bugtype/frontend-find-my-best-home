/**
 * @see https://github.com/apollographql/apollo-client/blob/c2698e5fdbd109a4765ce269d345b20cfccc0ec9/src/react/types/types.ts#L78
 */
export type QueryHooks<T> = {
  loading: boolean;
  error: Error | null;
  data: T | undefined;
};
