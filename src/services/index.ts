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

// TODO: axios에서 타입변환하는 것이 좋을 듯하다.
const apiResponseToData = (axiosResponse: AxiosResponse<any>) => {
  return axiosResponse.data;
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

// TODO: 파일 분리해야함.
// FIXME: type
export const authService = {
  login(params: { username: string; password: string }): Observable<any> {
    return from(httpClient.post('/auth/login', params)).pipe(
      map(apiResponseToData),
      map((data) => data.access_token)
    );
  },
};

// TODO: 파일 분리해야함.
// FIXME: type
export const storeService = {
  saveToken(params: { token: string }): Observable<any> {
    // TODO: 실패하는 경우가 있나?
    try {
      sessionStorage.setItem('token', params.token);
    } catch (e) {
      return from('0');
    }
    return from('1');
  },
  getToken(): Observable<any> {
    return from(sessionStorage.getItem('token') || '');
  },
};
