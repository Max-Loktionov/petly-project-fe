import Logout from "components/Logout";
import PetsData from "components/PetsData";
import UserData from "components/UserData";
import { useState } from "react";
// import { useGetUserQuery } from "redux/userApi";
import Modal from "components/Modal/Modal";
import ModalAddsPet from "components/ModalAddsPet";

import { UserPageContainer, BoxUser } from "./UserPage.styled";

const UserPage = () => {
  // const { data, error } = useGetUserQuery();
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);

  const closeAddPetModal = e => {
    if (e) {
      setIsOpenAddPetModal(false);
    }
    // When the modal is hidden..
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };
  const openAddPetModal = e => {
    if (e) {
      setIsOpenAddPetModal(true);
    }
    // Когда модальное окно открыто, фиксируем элемент body
    const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
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
