import Logout from "components/Logout";
import PetsData from "components/PetsData";
import UserData from "components/UserData";
import { useState } from "react";
import { useGetUserQuery } from "redux/userApi";
import Modal from "components/Modal/Modal";
import ModalAddsPet from "components/ModalAddsPet";

import { UserPageContainer, BoxUser } from "./UserPage.styled";

const UserPage = () => {
  const { data, error } = useGetUserQuery();
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);

  const closeAddPetModal = e => {
    if (e) {
      setIsOpenAddPetModal(false);
    }
  };
  const openAddPetModal = e => {
    if (e) {
      setIsOpenAddPetModal(true);
    }
  };

  return (
    <>
      {isOpenAddPetModal && (
        <Modal onClose={closeAddPetModal}>
          <ModalAddsPet onClose={closeAddPetModal} />
        </Modal>
      )}
      <UserPageContainer>
        <BoxUser>
          <UserData onOpenModal={openAddPetModal} />
          <Logout />
        </BoxUser>
        <PetsData onOpenModal={openAddPetModal} />
      </UserPageContainer>
    </>
  );
};

export default UserPage;
