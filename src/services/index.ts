import 'rxjs';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from '@models';
import { httpClient } from '@libs';
import { AxiosResponse } from 'axios';

type PaginatePayload = {
  page: number;
  // TODO: filter: string;
  // TODO:  filterType: string;
};

export const boardListService = {
  paginate(params: PaginatePayload): Observable<Board[]> {
    return from(httpClient.get(`/boards?page=${params.page}`)).pipe(
      map(apiResponseToData)
    );
  },

  getById(id: number): Observable<Board> {
    return from(httpClient.get(`/boards/${id}`)).pipe(map(apiResponseToData));
  },
};

// TODO: axios에서 타입변환하는 것이 좋을 듯하다.
const apiResponseToData = (axiosResponse: AxiosResponse<any>) => {
  return axiosResponse.data;
};
