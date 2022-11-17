import { useState } from "react";
import { useGetUserQuery } from "redux/userApi";

import {
  UserBlock,
  BoxImg,
  EditImgBtn,
  IconEditImgBtn,
  ImgUser,
  BoxInfo,
  BoxTitle,
  Title,
  Text,
  Block,
  EditTextBtn,
  EditTextBtnIcon,
  Input,
  Form,
} from "./UserDataItem.styled";

const UserDataItem = () => {
  const { data: user = [], isLoading, isError } = useGetUserQuery();

  const BASE_URL = "https://www.gravatar.com/avatar/";
  const imgUrl = user?.data?.result?.avatar;

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editBirthday, setEditBirthday] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editCity, setEditCity] = useState(false);

  const [name, setName] = useState(user.data.result.name);
  const [email, setEmail] = useState(user.data.result.email);
  const [birthday, setBirthday] = useState(user.data.result.birthday);
  const [phone, setPhone] = useState(user.data.result.phone);
  const [city, setCity] = useState(user.data.result.city);
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [birthday, setBirthday] = useState();
  // const [phone, setPhone] = useState();
  // const [city, setCity] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "city":
        setCity(value);
        break;
      default:
        return;
    }
  };

  const hendle = () => {
    setEditName(true);
  };

  return (
    <UserBlock>
      {user.length === 0 ? (
        <div>not found</div>
      ) : (
        <>
          <BoxImg>
            <ImgUser src={BASE_URL + imgUrl} alt="Avatar User" />
            <EditImgBtn>
              <IconEditImgBtn />
              Edit photo
            </EditImgBtn>
          </BoxImg>
          <BoxInfo>
            <BoxTitle>
              <Title>Name:</Title>
              <Block>
                <Form>
                  {editName ? (
                    <Input
                      disabled={disabled}
                      onChange={handleChange}
                      name="name"
                      value={name}
                    />
                  ) : (
                    <Text>{user.data.result.name}</Text>
                  )}
                  <EditTextBtn type="button" onClick={hendle}>
                    <EditTextBtnIcon />
                  </EditTextBtn>
                </Form>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>Email:</Title>
              <Block>
                <Form>
                  {editEmail ? (
                    <Input
                      disabled={disabled}
                      onChange={handleChange}
                      name="email"
                      value={email}
                    />
                  ) : (
                    <Text>{user.data.result.email}</Text>
                  )}
                  <EditTextBtn>
                    <EditTextBtnIcon />
                  </EditTextBtn>
                </Form>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>Birthday:</Title>
              <Block>
                <Form>
                  {editBirthday ? (
                    <Input
                      disabled={disabled}
                      onChange={handleChange}
                      name="birthday"
                      value={birthday}
                    />
                  ) : (
                    <Text>{user.data.result.birthday}</Text>
                  )}
                  <EditTextBtn>
                    <EditTextBtnIcon />
                  </EditTextBtn>
                </Form>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>Phone:</Title>
              <Block>
                <Form>
                  {editPhone ? (
                    <Input
                      disabled={disabled}
                      onChange={handleChange}
                      name="phone"
                      value={phone}
                    />
                  ) : (
                    <Text>{user.data.result.phone}</Text>
                  )}
                  <EditTextBtn>
                    <EditTextBtnIcon />
                  </EditTextBtn>
                </Form>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>City:</Title>
              <Block>
                <Form>
                  {editCity ? (
                    <Input
                      disabled={disabled}
                      onChange={handleChange}
                      name="city"
                      value={city}
                    />
                  ) : (
                    <Text>{user.data.result.city}</Text>
                  )}
                  <EditTextBtn>
                    <EditTextBtnIcon />
                  </EditTextBtn>
                </Form>
              </Block>
            </BoxTitle>
          </BoxInfo>
        </>
      )}
    </UserBlock>
  );
};

export default UserDataItem;
