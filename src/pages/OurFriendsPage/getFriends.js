import axios from "axios";
// axios.defaults.baseURL = "https://petly-be.herokuapp.com/";

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

const getFriends = async () => {
  const response = await axios.get("friends");
  return response.data;
};

export default getFriends;
