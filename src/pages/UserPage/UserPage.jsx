import Logout from "components/Logout";
import PetsData from "components/PetsData";
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
        <PetsData />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
