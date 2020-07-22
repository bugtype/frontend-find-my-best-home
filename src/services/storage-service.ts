// TODO: 파일 분리해야함.

import { Observable, from } from 'rxjs';

export const storageService = {
  // FIXME: type
  saveToken(params: { token: string }): Observable<string> {
    sessionStorage.setItem('token', params.token);
    return from(params.token);
  },
  getToken(): Observable<any> {
    return from(sessionStorage.getItem('token') || '');
  },
};
