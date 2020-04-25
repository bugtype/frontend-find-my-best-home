import { useState, useEffect } from 'react';
import { QueryHooks } from './types';
import { Board } from '@models';
import { boardListService } from '@services';
/**
 * TODO: 추후 바꿔야함. Apollo로 변경해야함.
 * https://www.apollographql.com/docs/react/ 아폴로를 모티브로 해서 작성
 */

export const useBoardData: () => QueryHooks<Board[]> = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [] as Board[],
  });

  useEffect(() => {
    // TODO: page 작업해야함.

    boardListService.paginate({ page: 1 }).subscribe((data) => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        data,
      }));
    });
  }, [setState]);

  return state;
};
