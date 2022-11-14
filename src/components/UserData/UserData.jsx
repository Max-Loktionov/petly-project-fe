import AddPetBtn from "components/AddPetBtn";
import UserDataItem from "components/UserDataItem";
import { BoxUser, TitleUser, TitleBtn, BoxTitleUser, BoxBtnTablet } from "./UserData.styled";

const UserData = () => {
  return (
    <BoxUser>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
        <BoxBtnTablet>
          <TitleBtn>Add pet</TitleBtn>
          <AddPetBtn active>+</AddPetBtn>
        </BoxBtnTablet>
      </BoxTitleUser>
      <UserDataItem />
    </BoxUser>
  );
};

export default UserData;
