import { useState } from "react";
import { AddPet } from "./AddPetBtn.styled";

const AddPetBtn = ({ disabled = false, ...props }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <AddPet active disabled={disabled} onClick={toggleModal} {...props}>
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
