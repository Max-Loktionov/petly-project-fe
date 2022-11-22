import axios from "axios";
axios.defaults.baseURL = "https://petly-be.herokuapp.com/";

const getNews = async search => {
  const response = await axios.get("news");
  return response.data;
};

export default getNews;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const newsApi = createApi({
//   reducerPath: "news",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://petly-be.herokuapp.com",
//   }),
//   tagTypes: ["News"],
//   endpoints: builder => ({
//     getNews: builder.query({
//       query: () => `news`,
//       providesTags: ["News"],
//     }),
//   }),
// });

// export const { useGetNewsQuery } = newsApi;

// into redux name newsApi

//
