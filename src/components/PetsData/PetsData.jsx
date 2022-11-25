import { useDispatch } from "react-redux";
import { noticeActions } from "redux/notices/noticeSlice";
import AddPetBtn from "components/AddPetBtn";

import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn } from "./PetsData.styled";
import PetsList from "components/PetsList";

const PetsData = () => {
  const dispatch = useDispatch();
  const handleModalOpen = () => dispatch(noticeActions.changeModalAddPets());
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
