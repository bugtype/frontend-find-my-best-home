import { AxiosResponse } from 'axios';

export type PaginatePayload = {
  page: number;
  // TODO: filter: string;
  // TODO:  filterType: string;
};

export type ResponseType<T> = { data: T };
