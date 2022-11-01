import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const editApi = createApi({
  reducerPath: 'editApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    editName: builder.mutation({
      query: (model) => ({
        url: '/user/name',
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            "Content-Type": "application/json"
        },
        body: model,
      }),
    }),
    editEmail: builder.mutation({
        query: (model) => ({
          url: '/user/email',
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            "Content-Type": "application/json"
          },
          body: model,
        }),
    }),
    editPhoneNumber: builder.mutation({
        query: (model) => ({
          url: '/user/phonenumber',
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            "Content-Type": "application/json"
          },
          body: model,
        }),
    }),
    editProfilePicture: builder.mutation({
      query: (model) => ({
        url: 'user/profilepicture',
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          "Content-Type": "application/json"
        },
        body: model,
      })
    })
  }),
});

export const { useEditNameMutation, useEditEmailMutation, useEditPhoneNumberMutation, useEditProfilePictureMutation} = editApi;