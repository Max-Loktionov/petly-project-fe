import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://petly-be.herokuapp.com/user";

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
        return {
          url: "/pets",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
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

    // transformResponse: (response) => response.data,
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useAddPetMutation, useDeletePetMutation, useUpdateUserAvatarMutation } = userApi;
