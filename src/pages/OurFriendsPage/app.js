import axios from "axios";

const getFriends = async () => {
  const response = await axios.get("https://petly-be.herokuapp.com/friends");
  return response.data;
};

export default getFriends;
