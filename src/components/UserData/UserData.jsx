import UserDataItem from "components/UserDataItem";
import { BoxUser, TitleUser, TitleBtn, BtnAddPet, BoxTitleUser, BoxBtnTablet } from "./UserData.styled";

const UserData = () => {
  return (
    <BoxUser>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
        <BoxBtnTablet>
          <TitleBtn>Add pet</TitleBtn>
          <BtnAddPet active>+</BtnAddPet>
        </BoxBtnTablet>
      </BoxTitleUser>
      <UserDataItem />
    </BoxUser>
  );
};

export default UserData;
