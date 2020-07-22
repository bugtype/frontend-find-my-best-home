// TODO: 파일 분리해야함.

import { Observable, from } from 'rxjs';

// FIXME: type
export const storageService = {
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
