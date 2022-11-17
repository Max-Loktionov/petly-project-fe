import axios from "axios";
axios.defaults.baseURL = "https://petly-be.herokuapp.com/";

const getNews = async () => {
  const response = await axios.get("news");
  return response.data;
};

export default getNews;
