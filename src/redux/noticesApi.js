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

    addNotice: builder.mutation({
      query: newNotice => {
        // console.log("====noticeApi newNotice:", newNotice);
        const newFormdata = new FormData();
        Object.keys(newNotice).forEach(key => newFormdata.append(key, newNotice[key]));
        newFormdata.set("avatar", newNotice.avatar[0]);
        // console.log("====noticeApi newFormdata json:", JSON.stringify(Object.fromEntries(newFormdata)));

        return { url: "/notices", method: "POST", body: newFormdata };
      },
      invalidatesTags: ["Notices"],
    }),

    // listNoticesByCategory: builder.query({
    //   query: ({ category, page = 1, limit = 15 }) => ({
    //     url: /notices/categories/${category}?page=${page}&limit=${limit},
    //     method: "GET",
    //   }),
    //   providesTags: ["Notices"],
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
  useGetUserNoticesQuery
} = noticesApi;
