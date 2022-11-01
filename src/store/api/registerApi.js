import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (model) => ({
        url: '/register',
        method: 'POST',
        body: model,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;