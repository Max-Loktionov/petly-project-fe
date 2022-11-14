import { UserBlock } from "./UserDataItem.styled";
// import { useGetUserQuery } from "redux/userApi";

const UserDataItem = ({ id, name, data, breed, comment }) => {
  console.log(comment);
  //   const { date, error, isLoading } = useGetUserQuery();
  //   console.log(date);
  return <UserBlock></UserBlock>;
};

export default UserDataItem;
