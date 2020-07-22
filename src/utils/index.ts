import { AxiosResponse } from 'axios';

// TODO: axios interceptor에서 타입변환하는 것이 좋을 듯하다.?
export const apiResponseToData = (axiosResponse: AxiosResponse) => {
  return axiosResponse.data;
};
