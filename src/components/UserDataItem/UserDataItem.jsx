import { useState } from "react";
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
  // const { data, isLoading, isError } = useGetUserQuery();
  // console.log(useGetUserQuery());
  // const [user, setUser] = useState([]);

  // if (data) {
  //   return setUser(data.data);
  // }

  // const { name, email, avatar, birthday, city, phone } = user;
  return (
    <UserBlock>
      <BoxImg>
        <ImgUser src="http://wer" alt="User" />
        <EditImgBtn>
          <IconEditImgBtn />
          Edit photo
        </EditImgBtn>
      </BoxImg>
      <BoxInfo>
        <BoxTitle>
          <Title>Name:</Title>
          <Block>
            <Text>Anna</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>Email:</Title>
          <Block>
            <Text>anna00@gmail.com</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>Birthday:</Title>
          <Block>
            <Text>00.00.0000</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>Phone:</Title>
          <Block>
            <Text>+38000000000</Text>
            <EditTextBtn>
              <EditTextBtnIcon />
            </EditTextBtn>
          </Block>
        </BoxTitle>
        <BoxTitle>
          <Title>City:</Title>
          <Block>
            <Text>Kiev</Text>
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
