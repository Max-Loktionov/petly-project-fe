import Logout from "components/Logout";
import PetsData from "components/PetsData";
import UserData from "components/UserData";
import Button from "components/Button";
import { useGetUserQuery } from "redux/userApi";

import { UserPageContainer, BoxUser } from "./UserPage.styled";

const UserPage = () => {
  const { data, error } = useGetUserQuery();

  return (
    <>
      {/* <Button onClick={openAddPetModal}>Add pet</Button> */}

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
