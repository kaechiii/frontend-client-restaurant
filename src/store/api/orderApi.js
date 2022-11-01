import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes:['Order'],
  endpoints: (builder) => ({
    postOrder: builder.mutation({
        query: (model) => ({
          url: '/order',
          method: 'POST',
          body: model,
          headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }),
    }),
    getOrderById: builder.query({
        query: ({ id }) => ({
            url: `/order/${id}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
            },
        }),
        providesTags:['Order']
    }),
    postReview: builder.mutation({
        query: (model) => ({
          url: '/review',
          method: 'POST',
          body: model,
          headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }),
        invalidatesTags:['Order']
    }),
    getOrderByUserId: builder.query({
        query: () => ({
            url: '/order',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
            },
        }),
    }),
  })
});

export const {usePostOrderMutation, useGetOrderByIdQuery, usePostReviewMutation, useGetOrderByUserIdQuery} = orderApi;