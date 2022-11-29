import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

const getNews = async () => {
  try {
    const response = await axios.get("news");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getNews;
