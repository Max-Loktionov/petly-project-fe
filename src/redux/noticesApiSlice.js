import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://petly-be.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Notices"],
  endpoints: builder => ({
    listNoticesByCategory: builder.query({
      query: ({ category, page = 1, limit = 15 }) => ({
        url: `/notices/categories/${category}?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    // listNoticesByQuery: builder.query({
    //   query: ({ category, searchQuery }) => ({
    //     url: `/categories/${category}?query=${searchQuery}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Notices"],
    //   invalidatesTags: ["Notices"],
    // }),
    // listUserNotices: builder.query({
    //   query: ({ page = 1, limit = 15, favorite }) => ({
    //     url: `/user?page=${page}&limit=${limit}${favorite ? "&favorite=true" : ""}`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["Notices"],
    // }),
    getNoticesById: builder.query({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    addNotice: builder.mutation({
      query: newNotice => ({
        url: "/notices",
        method: "POST",
        body: newNotice,
      }),
      invalidatesTags: ["Notices"],
    }),
    // updateFavorites: builder.mutation({
    //   query: (noticeId, favorite) => ({
    //     url: `/favorites/${noticeId}`,
    //     method: "POST",
    //     body: favorite,
    //   }),
    //   invalidatesTags: ["Notices"],
    // }),
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notices"],
    }),
  }),
});

export const {
  useListNoticesByCategoryQuery,
  useListNoticesByQueryQuery,
  useListUserNoticesQuery,
  useGetNoticesByIdQuery,
  useAddNoticeMutation,
  useUpdateFavoritesMutation,
  useDeleteNoticeMutation,
} = noticesApi;
