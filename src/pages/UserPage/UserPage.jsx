import Logout from "components/Logout";
import PetsData from "components/PetsData";
import UserData from "components/UserData";
import { useGetUserQuery } from "redux/userApi";

import { UserPageContainer, BoxUser } from "./UserPage.styled";

const UserPage = () => {
  const { data, error } = useGetUserQuery();

  return (
    <>
      <UserPageContainer>
        <BoxUser>
          <UserData />
          <Logout />
        </BoxUser>
        <PetsData />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
