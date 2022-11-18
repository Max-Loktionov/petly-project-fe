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

  const BASE_URL = "https://www.gravatar.com/avatar/";
  const imgUrl = user?.data?.result?.avatar;

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
                <Text>{user.data.result.name}</Text>
                <EditTextBtn>
                  <EditTextBtnIcon />
                </EditTextBtn>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>Email:</Title>
              <Block>
                <Text>{user.data.result.email}</Text>
                <EditTextBtn>
                  <EditTextBtnIcon />
                </EditTextBtn>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>Birthday:</Title>
              <Block>
                <Text>{user.data.result.birthday}</Text>
                <EditTextBtn>
                  <EditTextBtnIcon />
                </EditTextBtn>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>Phone:</Title>
              <Block>
                <Text>{user.data.result.phone}</Text>
                <EditTextBtn>
                  <EditTextBtnIcon />
                </EditTextBtn>
              </Block>
            </BoxTitle>
            <BoxTitle>
              <Title>City:</Title>
              <Block>
                <Text>{user.data.result.city}</Text>
                <EditTextBtn>
                  <EditTextBtnIcon />
                </EditTextBtn>
              </Block>
            </BoxTitle>
          </BoxInfo>
        </>
      )}
    </UserBlock>
  );
};

export default UserDataItem;
