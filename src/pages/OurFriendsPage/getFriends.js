import axios from "axios";
axios.defaults.baseURL = "https://petly-be.herokuapp.com/";

const getFriends = async () => {
  const response = await axios.get("friends");
  return response.data;
};

export default getFriends;
