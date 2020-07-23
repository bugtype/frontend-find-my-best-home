import { useState, useEffect } from 'react';
import { QueryHooks } from './types';
import { BoardModel } from '@models';
import { boardService } from '@services';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export * from './auth';

/**
 * TODO: 추후 바꿔야함. Apollo로 변경해야함.
 * https://www.apollographql.com/docs/react/
 */

export const useBoardData: (page: number) => QueryHooks<BoardModel[]> = (
  page
) => {
  const [state, setState] = useState<QueryHooks<BoardModel[]>>({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      data: undefined,
    }));
    boardService.paginate({ page }).subscribe(
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

export const useBoardDetail: (id: number) => QueryHooks<BoardModel> = (id) => {
  const [state, setState] = useState<QueryHooks<BoardModel>>({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      data: undefined,
    }));
    boardService.getById(id).subscribe(
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
export const useParseQueryString: <T>(type: T) => [T] = () => {
  const location = useLocation();
  const queries = queryString.parse(location.search);

  return [queries];
};
