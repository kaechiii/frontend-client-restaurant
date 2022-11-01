import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const couponApi = createApi({
  reducerPath: 'couponApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getCoupons: builder.query({
      query: () => ({
        url: '/coupon',
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }),
    }),
    getCoupon: builder.mutation({
      query: (model) => ({
        url: '/coupon',
        method: 'POST',
        body: model,
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
      }),
    }),
  }),
});

export const { useGetCouponsQuery, useGetCouponMutation } = couponApi;