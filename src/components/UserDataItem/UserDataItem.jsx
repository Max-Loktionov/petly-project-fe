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
  LogOut,
  LogOutIcon,
} from "./UserDataItem.styled";
// import { useGetUserQuery } from "redux/userApi";

const UserDataItem = ({ id, name, data, breed, comment }) => {
  console.log(comment);
  //   const { date, error, isLoading } = useGetUserQuery();
  //   console.log(date);
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
          {name}
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
      <LogOut>
        <LogOutIcon />
        log out
      </LogOut>
    </UserBlock>
  );
};

export default UserDataItem;
