import { useState, useEffect } from 'react';
import { QueryHooks } from './types';
import { Board } from '@models';
import { boardListService } from '@services';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { catchError } from 'rxjs/operators';

/**
 * TODO: 추후 바꿔야함. Apollo로 변경해야함.
 * https://www.apollographql.com/docs/react/
 */

export const useBoardData: (page: number) => QueryHooks<Board[]> = (page) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [] as Board[], // FIXME: 어떻게 타입 처리를 할까나
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      data: [],
    }));
    boardListService.paginate({ page }).subscribe(
      (data) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data,
        }));
      },
      (error) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    );
  }, [page, setState]);

  return state;
};

export const useBoardDetail: (id: number) => QueryHooks<Board> = (id) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: {} as Board, // FIXME: 어떻게 타입 처리를 할까나
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      data: {} as Board,
    }));
    boardListService.getById(id).subscribe(
      (data) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data,
        }));
      },
      (error) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    );
  }, [id, setState]);

  return state;
};

/**
 * query를 parse해서 보여준다.
 */
export const useParseQueryString = () => {
  const location = useLocation();
  const queries = queryString.parse(location.search);

  return [queries];
};
