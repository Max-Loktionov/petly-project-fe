import AddPetBtn from "components/AddPetBtn";
import UserDataForm from "components/UserDataItem/UserDataForm";
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
      <UserDataForm />
    </>
  );
};

export default UserData;
