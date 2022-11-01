import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: () => ({
        url: '/user',
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            "Content-Type": "application/json"
        },
      }),
    }),
  }),
});

export const { useGetUserMutation } = userApi;