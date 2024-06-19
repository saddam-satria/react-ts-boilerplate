import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_HEADER_KEY, API_KEY, API_URL } from '@/utlis/constant';



const baseHttp = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set(API_HEADER_KEY, API_KEY);
    return headers;
  },
});

export default baseHttp;
