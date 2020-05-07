import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  Paper,
  makeStyles,
  TableFooter,
} from '@material-ui/core';
import { useBoardData, useParseQueryString } from '@hooks';
import { BoardRow, PageNavigation } from '@components';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const BoardListPage = () => {
  const classes = useStyles();

  const [queries] = useParseQueryString({
    page: Number,
  });
  const [page, setPage] = useState(queries.page || 1);
  const { data, loading, error } = useBoardData(page);

  return (
    <>
      <Grid
        container
        item
        className={'Content'}
        alignItems="center"
        spacing={2}
      >
        {loading && (
          <Grid item xs={12}>
            <Typography variant="body2">loading...</Typography>
          </Grid>
        )}
        {!loading && error && (
          <Grid item xs={12}>
            <Typography variant="body2">error...</Typography>
          </Grid>
        )}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            {/* // FIXME: 한글로하면 bold가 안들어감. */}
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>지역</TableCell>
                <TableCell>제목</TableCell>
                <TableCell align="right">글쓴이</TableCell>
                <TableCell align="right">날짜</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((board) => (
                <BoardRow item={board} />
              ))}
            </TableBody>
            <TableFooter>
              <TableCell colSpan={5} align="center">
                <PageNavigation
                  currentPage={page}
                  // TODO: 서버에서 받아와야함.
                  start={1}
                  last={2}
                  onPageClick={(page) => setPage(page)}
                />
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};
