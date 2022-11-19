import AddPetBtn from "components/AddPetBtn";
import UserDataItem from "components/UserDataItem/";
import { TitleUser, TitleBtn, BoxTitleUser, BoxBtnTablet } from "./UserData.styled";

const UserData = ({ onOpenModal }) => {
  return (
    <>
      <BoxTitleUser>
        <TitleUser>My information:</TitleUser>
        <BoxBtnTablet>
          <TitleBtn>Add pet</TitleBtn>
          <AddPetBtn active onOpenModal={onOpenModal}></AddPetBtn>
        </BoxBtnTablet>
      </BoxTitleUser>
      <UserDataItem />
    </>
  );
};

export default UserData;
