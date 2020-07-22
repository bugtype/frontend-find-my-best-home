import React from 'react';
import { Board } from '@models';
import { TableRow, TableCell } from '@material-ui/core';
import { DateTime } from '@components';
import { Link } from 'react-router-dom';
import { ROUTE_BOARD_DETAIL_WITH_ID } from 'configs';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subject: {
    textDecoration: 'none',
    color: '#000',
  },
});

const BoardRow = ({ item }: { item: Board }) => {
  const classes = useStyles();
  const { subject, date, userName, city, id } = item;

  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{city}</TableCell>
      <TableCell component="th" scope="row">
        <Link
          to={ROUTE_BOARD_DETAIL_WITH_ID(item.id)}
          className={classes.subject}
        >
          {subject}
        </Link>
      </TableCell>
      <TableCell align="right">{userName}</TableCell>
      <TableCell align="right">
        <DateTime date={date} textFormat={'MM-dd'} />
      </TableCell>
    </TableRow>
  );
};

export { BoardRow };
