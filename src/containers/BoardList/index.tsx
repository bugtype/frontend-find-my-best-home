import React, { useState } from 'react';
import {
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  Paper,
  makeStyles,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { useBoardData, useParseQueryString } from '@hooks';
import { BoardRow, PageNavigation } from '@components';

const useStyles = makeStyles({
  tableContainer: {
    height: '100%',
  },
  table: {
    minWidth: 650,
  },
});

const BoardList = () => {
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
    <Box height="100%" display="flex" flexDirection="column">
        {loading && (
            <Typography variant="body2">loading...</Typography>
        )}
        {!loading && error && (
            <Typography variant="body2">error...</Typography>
        )}
        <Box flex="1">
        <TableContainer className={classes.tableContainer} component={Paper}>
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
          </Table>
          <PageNavigation
            currentPage={page}
            // TODO: 디자인
            // TODO: 서버에서 page 관련 데이터 받아와야함.
            start={1}
            last={2}
            onPageClick={(page) => setPage(page)}
          />
        </TableContainer>
        </Box>
        </Box>
    </>
  );
};

export { BoardList };
