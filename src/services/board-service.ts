import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { BoardModel } from '@models';
import { httpClient } from '@libs';
import { PaginatePayload } from './type';
import { apiResponseToData } from 'utils';

export const boardService = {
  paginate(params: PaginatePayload): Observable<BoardModel[]> {
    return from(httpClient.get(`/boards?page=${params.page}`)).pipe(
      map(apiResponseToData)
    );
  },

  getById(id: number): Observable<BoardModel> {
    return from(httpClient.get(`/boards/${id}`)).pipe(map(apiResponseToData));
  },
};
