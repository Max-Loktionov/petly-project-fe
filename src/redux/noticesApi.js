import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const { REACT_APP_BASE_URL } = process.env;
// const BASE_URL = `${REACT_APP_BASE_URL}/notices`;
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
    getNotices: builder.query({
      query: ({ page, perPage, category, filter }) => {
        const categoryQuery = !!category ? `category=${category}` : "";
        const pageQuery = page === 1 ? "" : `&&page=${page}`;
        const perPageQuery = !!perPage !== 15 ? "" : `&&per_page=${perPage}`;
        const filterQuery = filter === "" ? "" : `&&filter=${filter}`;

        return `/?${categoryQuery + pageQuery + perPageQuery + filterQuery}`;
      },
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
      query: ({ formdata, noticeCategory }) => {
        const newFormdata = new FormData();
        Object.keys(formdata).forEach(key => newFormdata.append(key, formdata[key]));
        if (formdata.avatar) {
          newFormdata.set("avatar", formdata.avatar[0]);
        }
        return { url: `?category=${noticeCategory}`, method: "POST", body: newFormdata };
      },
      invalidatesTags: ["Notices"],
    }),
  }),
});

export const { useGetNoticesByIdQuery, useAddNoticeMutation, useGetNoticesQuery, useDeleteNoticeMutation } = noticesApi;
