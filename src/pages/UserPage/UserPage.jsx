import Logout from "components/Logout";
import PetsList from "components/PetsList";
import UserData from "components/UserData";

import { UserPageContainer, BoxUser } from "./UserPage.styled";

const UserPage = () => {
  return (
    <>
      <div style={{ height: "42px", backgroundColor: "green", marginBottom: "61px" }}></div>
      <UserPageContainer>
        <BoxUser>
          <UserData />
          <Logout />
        </BoxUser>
        <PetsList />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
