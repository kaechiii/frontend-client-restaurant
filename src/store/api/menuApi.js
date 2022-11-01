import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => ({
                url: '/menu',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
        }),
        getMenuById: builder.query({
            query: ({ id }) => ({
                url: `/menu/${id}`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
        })
    }),
});

export const { useGetMenuQuery, useGetMenuByIdQuery} = menuApi;