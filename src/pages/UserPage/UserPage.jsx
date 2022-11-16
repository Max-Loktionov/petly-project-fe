import Button from "components/Button";
import Modal from "components/Modal/Modal";
import ModalAddsPet from "components/ModalAddsPet";
import { useState } from "react";
import { useGetUserQuery } from "redux/userApi";

const UserPage = () => {
  const [isOpenAddPetModal, setIsOpenAddPetModal] = useState(false);
  const { data, error } = useGetUserQuery();

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
      <Button onClick={openAddPetModal}>Add pet</Button>

      {isOpenAddPetModal && (
        <Modal onClose={closeAddPetModal}>
          <ModalAddsPet onClose={closeAddPetModal} />
        </Modal>
      )}
    </>
  );
};

export default UserPage;
