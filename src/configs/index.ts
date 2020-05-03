export const apiUrl = 'http://localhost:3000';
export const apiTimeout = 1000;

// routes
export const ROUTE_BOARD_LIST = '/board';
export const ROUTE_BOARD_DETAIL = '/board/:no';
export const ROUTE_BOARD_DETAIL_WITH_NO = (no: number) => `/board/${no}`;
