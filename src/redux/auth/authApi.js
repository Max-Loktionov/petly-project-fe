import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_NAME = process.env.REACT_APP_SITE_URL;
const BASE_URL = `${SERVER_NAME}/auth`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
      providesTags: ["Auth", "User"],
      refetchOnMountOrArgChange: true,
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
      invalidatesTags: ["Auth", "User"],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      invalidatesTags: ["Auth", "User"],
    }),
  }),
});

export const { useCurrentUserQuery, useRegisterUserMutation, useLoginUserMutation, useLogOutUserMutation } = authApi;
