import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from '@models';
import { httpClient } from '@libs';
import { PaginatePayload } from './type';
import { apiResponseToData } from 'utils';

export const boardService = {
  paginate(params: PaginatePayload): Observable<Board[]> {
    return from(httpClient.get(`/boards?page=${params.page}`)).pipe(
      map(apiResponseToData)
    );
  },

  getById(id: number): Observable<Board> {
    return from(httpClient.get(`/boards/${id}`)).pipe(map(apiResponseToData));
  },
};
