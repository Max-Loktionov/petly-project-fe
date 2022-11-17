import AddPetBtn from "components/AddPetBtn";
import UserDataItem from "components/UserDataItem";
import {
  TitleUser,
  TitleBtn,
  BoxTitleUser,
  BoxBtnTablet,
} from "./UserData.styled";

const UserData = ({ onModalOpen }) => {
  return (
    <>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
        <BoxBtnTablet>
          <TitleBtn>Add pet</TitleBtn>
          <AddPetBtn active onClick={onModalOpen}>
            +
          </AddPetBtn>
        </BoxBtnTablet>
      </BoxTitleUser>
      <UserDataItem />
    </>
  );
};

export default UserData;