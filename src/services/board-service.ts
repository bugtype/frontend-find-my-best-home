import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Board } from '@models';
import { httpClient } from '@libs';
import { PaginatePayload, ResponseType } from './type';
import { apiResponseToData } from 'utils';

export const boardService = {
  async paginate(params: PaginatePayload): Promise<Board[]> {
    const response = await httpClient.get<ResponseType<Board[]>>(
      `/boards?page=${params.page}`
    );
    return response.data.data;
  },
  getById(id: number): Observable<Board> {
    return from(httpClient.get(`/boards/${id}`)).pipe(map(apiResponseToData));
  },
};
