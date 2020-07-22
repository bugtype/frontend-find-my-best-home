// TODO: 파일 분리해야함.

import { from, Observable, of } from 'rxjs';
import { httpClient } from '@libs';
import JwtDecode from 'jwt-decode';
import { map, catchError } from 'rxjs/operators';
import { User } from '@models';
import { AxiosResponse } from 'axios';

// TODO: axios에서 타입변환하는 것이 좋을 듯하다.
const apiResponseToData = (axiosResponse: AxiosResponse<any>) => {
  return axiosResponse.data;
};

// FIXME: type
export const authService = {
  login(params: { username: string; password: string }): Observable<any> {
    return from(httpClient.post('/auth/login', params)).pipe(
      map(apiResponseToData),
      map((data) => data.access_token)
    );
  },
  getUserSelf(): Observable<User | undefined> {
    return of(sessionStorage.getItem('token') || {}).pipe(
      map((data) => JwtDecode(data)),
      catchError((_) => of(undefined))
    );
  },
  logout() {
    return of(sessionStorage.removeItem('token'));
  },
};
