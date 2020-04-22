import 'rxjs';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Board } from 'models';

type PaginatePayload = {
  page: number;
  // TODO: filter: string;
  // TODO:  filterType: string;
};
export const boardListService = {
  paginate(params: PaginatePayload): Observable<Board[]> {
    return of([
      {
        city: '판교',
        subject: '판교 지역 살기 좋습니다.',
        userName: '판교성애자',
        date: '2020-04-22T08:26:38.837Z',
      },
      {
        city: '강남',
        subject: '강남에서 원룸 구할 수 있나요?',
        userName: '애비 강남인',
        date: '2020-05-22T08:26:38.837Z',
      },
    ]).pipe(delay(1000));
  },
};
