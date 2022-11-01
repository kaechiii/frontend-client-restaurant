import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => ({
        url: '/cart',
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }),
      providesTags: ['Cart']
    }),
    postItem: builder.mutation({
        query: (model) => ({
          url: '/cart',
          method: 'POST',
          body: model,
          headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }),
        invalidatesTags: ['Cart']
    }),
    editItem: builder.mutation({
        query: ({id, model}) => ({
          url: `/cart/${id}`,
          method: 'PATCH',
          body: model,
          headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }),
        invalidatesTags: ['Cart']
    }),
    deleteItem: builder.mutation({
        query: ({id}) => ({
          url: `/cart/${id}`,
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }),
        invalidatesTags: ['Cart']
    }),
    deleteAll: builder.mutation({
        query: () => ({
          url: `/cart`,
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }),
        invalidatesTags: ['Cart']
    }),
  }),
});

export const { useGetItemsQuery, usePostItemMutation, useEditItemMutation, useDeleteItemMutation, useDeleteAllMutation } = cartApi;