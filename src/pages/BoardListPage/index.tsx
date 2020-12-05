import React from 'react';

import { BoardList } from '@containers';
import { Box } from '@material-ui/core';

const BoardListPage = () => {

  return (
      <Box padding={4} height="100%">
        <BoardList />
      </Box>
  );
};

export { BoardListPage };
