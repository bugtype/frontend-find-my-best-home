import { QueryHooks } from './types';
import { User } from '@models';
import { useState, useEffect } from 'react';
import { authService } from '@services';

export const useAuth: () => QueryHooks<User> = () => {
  const [state, setState] = useState<{
    loading: boolean;
    data: User | undefined;
    error: Error | null;
  }>({
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
    authService.getUserSelf().subscribe(
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
  }, [setState]);

  return state;
};
