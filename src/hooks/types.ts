export type QueryHooks<T> = {
  loading: boolean;
  error: Error | null;
  data: T | undefined;
};
