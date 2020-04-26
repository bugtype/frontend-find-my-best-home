import 'rxjs';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Board } from '@models';

type PaginatePayload = {
  page: number;
  // TODO: filter: string;
  // TODO:  filterType: string;
};

const mockData: Record<number, Board[]> = {
  1: [
    {
      no: 1000,
      city: '강남',
      subject: '강남 자취 어떤가요??',
      userName: '친구따라 강남',
      date: '2020-05-23T16:01:24.137Z',
    },
    {
      no: 999,
      city: '강남',
      subject: '강남에서 원룸 구할 수 있나요?',
      userName: '예비 강남인',
      date: '2020-05-22T14:26:38.837Z',
    },
    {
      no: 990,
      city: '판교',
      subject: '판교 지역 살기 좋습니다.',
      userName: '판교 자취생',
      date: '2020-04-22T08:26:38.837Z',
    },
    {
      no: 992,
      city: '종로',
      subject: '종로도 좋아요',
      userName: '종로-자취생',
      date: '2020-03-19T08:26:38.837Z',
    },
  ],
  2: [
    {
      no: 888,
      city: '판교',
      subject: '판교 자취 어떤가요??',
      userName: '친구따라 판교',
      date: '2020-04-23T16:01:24.137Z',
    },
    {
      no: 855,
      city: '판교',
      subject: '판교에서 원룸 구할 수 있나요?',
      userName: '예비 판교인',
      date: '2020-04-22T14:26:38.837Z',
    },
    {
      no: 842,
      city: '판교',
      subject: '판교 지역 살기 좋습니다.',
      userName: '판교 자취생',
      date: '2020-03-22T08:26:38.837Z',
    },
    {
      no: 841,
      city: '종로',
      subject: '종로도 좋아요',
      userName: '종로-자취생',
      date: '2020-03-19T08:26:38.837Z',
    },
  ],
};
export const boardListService = {
  paginate(params: PaginatePayload): Observable<Board[]> {
    const _page = params.page <= Object.keys(mockData).length ? params.page : 1;
    return of(mockData[_page]).pipe(delay(1000));
  },
};
