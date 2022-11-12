import {
  UserPageContainer,
  UserBlock,
  BoxUser,
  TitleUser,
  TitlePet,
  TitleBtn,
  BtnAddPet,
  BoxBtn,
  BoxTitlePet,
  BoxPet,
  BoxPetItem,
  PetBlock,
  BoxTitleUser,
  BoxBtnTablet,
} from "./UserPage.styled";

const UserPage = () => {
  return (
    <>
      <div style={{ height: "42px", backgroundColor: "green", marginBottom: "61px" }}></div>
      <UserPageContainer>
        <BoxUser>
          <BoxTitleUser>
            <TitleUser>My information:</TitleUser>
            <BoxBtnTablet>
              <TitleBtn>Add pet</TitleBtn>
              <BtnAddPet>+</BtnAddPet>
            </BoxBtnTablet>
          </BoxTitleUser>
          <UserBlock></UserBlock>
        </BoxUser>
        <BoxPet>
          <BoxTitlePet>
            <TitlePet>My pets:</TitlePet>
            <BoxBtn>
              <TitleBtn>Add pet</TitleBtn>
              <BtnAddPet>+</BtnAddPet>
            </BoxBtn>
          </BoxTitlePet>
          <BoxPetItem>
            <PetBlock></PetBlock>
            <PetBlock></PetBlock>
          </BoxPetItem>
        </BoxPet>
      </UserPageContainer>
    </>
  );
};

export default UserPage;
