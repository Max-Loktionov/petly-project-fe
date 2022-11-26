import { useDispatch } from "react-redux";
import AddPetBtn from "components/AddPetBtn";

import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn } from "./PetsData.styled";
import PetsList from "components/PetsList";
import { userActions } from "redux/user/userSlice";

const PetsData = () => {
  const dispatch = useDispatch();
  const handleModalOpen = () => dispatch(userActions.changeModalAddPets());
  return (
    <>
      <BoxPet>
        <BoxTitlePet>
          <TitlePet>My pets:</TitlePet>
          <BoxBtn>
            <TitleBtn>Add pet</TitleBtn>
            <AddPetBtn onClick={handleModalOpen} />
          </BoxBtn>
        </BoxTitlePet>
        <PetsList />
      </BoxPet>
    </>
  );
};

export default PetsData;
