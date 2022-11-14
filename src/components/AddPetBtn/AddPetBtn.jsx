import { useState } from "react";
import { AddPet } from "./AddPetBtn.styled";

const AddPetBtn = (...props) => {
  const [showModal, setShowModal] = useState();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <AddPet active onClick={toggleModal} {...props}>
        +
      </AddPet>
      {showModal && (
        <div onClose={toggleModal}>
          <p>modal</p>
          <button onClick={toggleModal}>close</button>
        </div>
      )}
    </>
  );
};

export default AddPetBtn;
