// TODO: 파일 분리해야함.

import { from, Observable, of } from 'rxjs';
import { httpClient } from '@libs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserModel } from '@models';
import { decodeJwt } from '@libs';
import { apiResponseToData } from '@utils';

export const authService = {
  login(params: { username: string; password: string }): Observable<string> {
    return from(httpClient.post('/auth/login', params)).pipe(
      map(apiResponseToData),
      map((data) => data.access_token),
      // FIXME: cookie, httpOnly
      tap((v) => sessionStorage.setItem('token', v))
    );
  },
  getUserSelf(): Observable<UserModel | undefined> {
    return of(sessionStorage.getItem('token') || '{e}').pipe(
      map((data) => decodeJwt<UserModel>(data)),
      catchError((_) => of(undefined))
    );
  },
  logout(): Observable<void> {
    return of(sessionStorage.removeItem('token'));
  },
};
