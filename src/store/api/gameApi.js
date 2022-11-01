import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const gameApi = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    tagTypes: ['Game', 'Leaderboard'],
    endpoints: (builder) => ({
        getLive: builder.query({
            query: () => ({
                url: '/game',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
            providesTags: ['Game']
        }),
        postNewHistory: builder.mutation({
            query: () => ({
              url: '/game',
              method: 'POST',
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }),
            invalidatesTags: ['Game', 'Leaderboard']
        }),
        postCoupons: builder.mutation({
            query: () => ({
                url: '/games-coupon',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
            invalidatesTags: ['Game']
        }),
        patchHistory: builder.mutation({
            query: (model) => ({
              url: '/game',
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
                "Content-Type": "application/json"
              },
              body: model,
            }),
            invalidatesTags: ['Game', 'Leaderboard']
        }),
        getLeaderboard: builder.query({
            query: () => ({
                url: '/leaderboard',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            }),
            providesTags: ['Leaderboard']
        }),
    }),
});



export const {useGetLiveQuery, usePostNewHistoryMutation, usePostCouponsMutation, usePatchHistoryMutation, useGetLeaderboardQuery} = gameApi;