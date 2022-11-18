import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://petly-be.herokuapp.com/",
  }),
  tagTypes: ["Notices"],
  endpoints: builder => ({
    notices: builder.query({
      query: () => ({ url: "/notices" }),
      providesTags: ["Notices"],
    }),
  }),
});

export const { useNoticesQuery } = noticesApi;
