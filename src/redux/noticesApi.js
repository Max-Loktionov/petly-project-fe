import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://petly-be.herokuapp.com/notices";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery,
  tagTypes: ["Notices"],

  endpoints: builder => ({
    getNoticesAll: builder.query({
      query: () => "/",
      providesTags: ["Notices"],
    }),

    getNoticesById: builder.query({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),

    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notices"],
    }),

    noticesByCategory: builder.query({
      query: category => ({
        url: `?category=${category}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),

    // addNotice: builder.mutation({
    //   query: newNotice => ({
    //     url: "/notices",
    //     method: "POST",
    //     body: newNotice,
    //   }),

    //   invalidatesTags: ["Notices"],
    // }),

    // listUserNotices: builder.query({
    //   query: ({ page = 1, limit = 15, favorite }) => ({
    //     url: /user?page=${page}&limit=${limit}${favorite ? "&favorite=true" : ""},
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["Notices"],
    // }),

    // updateFavorites: builder.mutation({
    //   query: (noticeId, favorite) => ({
    //     url: /favorites/${noticeId},
    //     method: "POST",
    //     body: favorite,
    //   }),
    //   invalidatesTags: ["Notices"],
    // }),
  }),
});

export const {
  useGetNoticesAllQuery,
  useNoticesByCategoryQuery,
  useListNoticesByQueryQuery,
  useListUserNoticesQuery,
  useGetNoticesByIdQuery,
  useAddNoticeMutation,
  useUpdateFavoritesMutation,
  useDeleteNoticeMutation,
} = noticesApi;
