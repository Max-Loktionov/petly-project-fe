import AddPetBtn from "components/AddPetBtn";

import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn } from "./PetsData.styled";
import PetsList from "components/PetsList";
import Modal from "components/Modal/Modal";
import ModalAddsPet from "components/ModalAddsPet";
import { useState } from "react";

const PetsData = () => {
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
      <BoxPet>
        <BoxTitlePet>
          <TitlePet>My pets:</TitlePet>
          <BoxBtn>
            <TitleBtn>Add pet</TitleBtn>
            <AddPetBtn openAddPetModal={openAddPetModal} disabled={false} />
          </BoxBtn>
        </BoxTitlePet>
        <PetsList />
      </BoxPet>
    </>
  );
};

export default PetsData;
