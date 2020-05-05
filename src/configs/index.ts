export const apiUrl = 'http://localhost:3000';
export const apiTimeout = 1000;

// routes
export const ROUTE_BOARD_LIST = '/board';
export const ROUTE_BOARD_LIST_WITH_PAGE = (page: number) =>
  `/board?page=${page}`;

export const ROUTE_BOARD_DETAIL = '/board/:id';
export const ROUTE_BOARD_DETAIL_WITH_ID = (id: number) => `/board/${id}`;
