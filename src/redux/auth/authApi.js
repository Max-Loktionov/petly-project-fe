import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://petly-be.herokuapp.com/auth",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: builder => ({
    currentUser: builder.query({
      query: () => ({ url: "/current" }),
      providesTags: ["Auth"],
    }),
    registerUser: builder.mutation({
      query: values => ({
        url: "/signup",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Auth"],
    }),
    loginUser: builder.mutation({
      query: values => ({
        url: "/login",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Auth"],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useCurrentUserQuery, useRegisterUserMutation, useLoginUserMutation, useLogOutUserMutation } = authApi;
