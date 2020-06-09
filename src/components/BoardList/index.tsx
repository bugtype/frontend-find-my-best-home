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
  Box,
  CircularProgress,
} from '@material-ui/core';
import { useBoardData, useParseQueryString } from '@hooks';
import { BoardRow, PageNavigation } from '@components';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const BoardList = () => {
  const classes = useStyles();

  const [queries] = useParseQueryString({
    page: Number,
  });
  const [page, setPage] = useState(queries.page || 1);
  const { data, loading, error } = useBoardData(page);

  if (loading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Grid container justify="center">
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
              {data?.map((board) => (
                <BoardRow key={board.id.toString()} item={board} />
              ))}
            </TableBody>
            {/* // FIXME: 에러 수정해야함.
            // validateDOMNesting(...): <td> cannot appear as a child of <tfoot>.  */}

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
