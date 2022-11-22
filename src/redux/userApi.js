import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://petly-be.herokuapp.com/user";
// const BASE_URL = "http://localhost:3001/user";

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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],

  endpoints: builder => ({
    getUser: builder.query({
      query: () => "/",
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: ({ name, data }) => ({
        url: `/${name}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    updateUserAvatar: builder.mutation({
      query: file => ({
        url: "/avatar",
        method: "PATCH",
        body: file,
      }),
      invalidatesTags: ["User"],
    }),

    //
    addPet: builder.mutation({
      query: formdata => {
        console.log(formdata);
        const formad = new FormData();
        Object.keys(formdata).forEach(key => formad.append(key, formdata[key]));
        formad.set("avatar", formdata.avatar[0]);
        console.log(JSON.stringify(Object.fromEntries(formad)));
        return {
          url: "/pets",
          method: "POST",
          body: formad,
        };
      },
      invalidatesTags: ["User"],
    }),

    deletePet: builder.mutation({
      query: petId => ({
        url: `/pets/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    getUserNotices: builder.query({
      query: notice => ({
        url: `/${notice}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getUserFavorite: builder.query({
      query: favorite => ({
        url: `/${favorite}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // transformResponse: (response) => response.data,
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useAddPetMutation,
  useDeletePetMutation,
  useUpdateUserAvatarMutation,
  useGetUserNoticesQuery,
  useGetUserFavoriteQuery } = userApi;
