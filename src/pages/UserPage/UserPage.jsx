import PetsList from "components/PetsList";
import UserData from "components/UserData";

import { UserPageContainer } from "./UserPage.styled";

const UserPage = () => {
  return (
    <>
      <div style={{ height: "42px", backgroundColor: "green", marginBottom: "61px" }}></div>
      <UserPageContainer>
        <UserData />
        <PetsList />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
