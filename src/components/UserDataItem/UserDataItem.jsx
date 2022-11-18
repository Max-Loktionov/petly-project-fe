import { useState } from "react";
import { useUpdateUserMutation } from "redux/userApi";
import { EditTextBtn, EditTextBtnIcon, UserDataInput } from "./UserDataItem.styled";

const UserDataItem = ({ name, defaultVaule }) => {
  const [active, setActive] = useState(false);
  const [inputeValue, setInputeValue] = useState(defaultVaule ?? "");
  const [editUserInfo] = useUpdateUserMutation();

  const onInputeChange = e => {
    setInputeValue(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    if (active === true && inputeValue.length !== 0) {
      setActive(false);
      const data = {
        [name]: inputeValue,
      };
      editUserInfo({ name, data });
      return;
    }

    setActive(true);
  };

  return (
    <>
      <UserDataInput disabled={!active} onChange={onInputeChange} name={name} value={inputeValue}></UserDataInput>
      <EditTextBtn onClick={handleClick}>
        <EditTextBtnIcon />
      </EditTextBtn>
    </>
  );
};

export default UserDataItem;
