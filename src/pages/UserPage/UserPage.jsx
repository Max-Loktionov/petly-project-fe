import Logout from "components/Logout";
import PetsData from "components/PetsData";
import UserData from "components/UserData";
import Modal from "components/Modal/Modal";
import ModalAddsPet from "components/ModalAddsPet";

import { UserPageContainer, BoxUser } from "./UserPage.styled";

const UserPage = () => {
  return (
    <>
      <Modal>
      <ModalAddsPet />
    </Modal>
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
