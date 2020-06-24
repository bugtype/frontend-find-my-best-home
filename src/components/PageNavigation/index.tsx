import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ROUTE_BOARD_LIST_WITH_PAGE } from '@configs';

interface Props {
  currentPage: number;
  start: number;
  last: number;
  onPageClick: (page: number) => void;
}

const PageNavigation = ({ currentPage, start, last, onPageClick }: Props) => {
  const history = useHistory();

  const _currentPage = currentPage || 1;

  const handlePageClick = (page: number) => () => {
    onPageClick(page);
    history.push(ROUTE_BOARD_LIST_WITH_PAGE(page));
  };
  return (
    <Grid container justify="center" spacing={2}>
      {Array(last - start + 1)
        .fill(0)
        .map((_, index) => {
          const page = start + index;
          return _currentPage === page ? (
            <Grid key={page} item onClick={handlePageClick(page)}>
              <Typography variant="body2" color={'primary'}>
                {page}
              </Typography>
            </Grid>
          ) : (
            <Grid key={page} item onClick={handlePageClick(page)}>
              <Typography variant="body2">{page}</Typography>
            </Grid>
          );
        })}
    </Grid>
  );
};

export { PageNavigation };
