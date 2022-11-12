import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://petly-be.herokuapp.com";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.token;
  //     if (token) {
  //       headers.set('authorization', `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => "/user",
    }),
    providesTags: ["User"],
    // transformResponse: (response) => response.data,
  }),
});

export const { useGetUserQuery } = userApi;
