import { useGetUserQuery, userApi } from "redux/userApi";

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
} from "./UserDataItem.styled";

const UserDataItem = () => {
  const { data: user = [], isLoading, isError } = useGetUserQuery();
  console.log(useGetUserQuery());
  console.log(user.data.result);

  const { avatar, birthday, city, email, name, phone } = user.data.result;

  return (
    <UserBlock>
      <BoxImg>
        <ImgUser src={avatar} alt="Avatar User" />
        <EditImgBtn>
          <IconEditImgBtn />
          Edit photo
        </EditImgBtn>
      </BoxImg>
      <BoxInfo>
        <BoxTitle>
          <Title>Name:</Title>
          <Block>
            <Text>{name}</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>Email:</Title>
          <Block>
            <Text>{email}</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>Birthday:</Title>
          <Block>
            <Text>{birthday}</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>Phone:</Title>
          <Block>
            <Text>{phone}</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>City:</Title>
          <Block>
            <Text>{city}</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
      </BoxInfo>
    </UserBlock>
  );
};

export default UserDataItem;
