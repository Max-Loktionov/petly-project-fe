import AddPetBtn from "components/AddPetBtn";

import { TitlePet, BoxBtn, BoxTitlePet, BoxPet, TitleBtn } from "./PetsData.styled";
import PetsList from "components/PetsList";

const PetsData = () => {
  return (
    <BoxPet>
      <BoxTitlePet>
        <TitlePet>My pets:</TitlePet>
        <BoxBtn>
          <TitleBtn>Add pet</TitleBtn>
          <AddPetBtn disabled={true} />
        </BoxBtn>
      </BoxTitlePet>
      <PetsList />
    </BoxPet>
  );
};

export default PetsData;
