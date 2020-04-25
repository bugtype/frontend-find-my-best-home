import 'rxjs';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Board } from '@models';

type PaginatePayload = {
  page: number;
  // TODO: filter: string;
  // TODO:  filterType: string;
};
export const boardListService = {
  paginate(params: PaginatePayload): Observable<Board[]> {
    return of([
      {
        city: '강남',
        subject: '강남 자취 어떤가요??',
        userName: '친구따라 강남',
        date: '2020-05-23T16:01:24.137Z',
      },
      {
        city: '강남',
        subject: '강남에서 원룸 구할 수 있나요?',
        userName: '예비 강남인',
        date: '2020-05-22T14:26:38.837Z',
      },
      {
        city: '판교',
        subject: '판교 지역 살기 좋습니다.',
        userName: '판교 자취생',
        date: '2020-04-22T08:26:38.837Z',
      },
      {
        city: '종로',
        subject: '종로도 좋아요',
        userName: '종로-자취생',
        date: '2020-03-19T08:26:38.837Z',
      },
    ]).pipe(delay(1000));
  },
};
