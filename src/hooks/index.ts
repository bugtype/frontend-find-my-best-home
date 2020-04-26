import { useState, useEffect } from 'react';
import { QueryHooks } from './types';
import { Board } from '@models';
import { boardListService } from '@services';
/**
 * TODO: 추후 바꿔야함. Apollo로 변경해야함.
 * https://www.apollographql.com/docs/react/
 */

export const useBoardData: (page: number) => QueryHooks<Board[]> = (page) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [] as Board[],
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      data: [],
    }));
    boardListService.paginate({ page }).subscribe((data) => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        data,
      }));
    });
  }, [page, setState]);

  return state;
};
