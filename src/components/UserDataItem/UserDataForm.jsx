import { useGetUserQuery } from "redux/userApi";
import UserDataItem from "./UserDataItem";
import devaultIcon from "../../img/default-icon-user.png";

import { UserBlock, BoxImg, EditImgBtn, IconEditImgBtn, ImgUser, BoxInfo, BoxTitle, Title, Block, Form } from "./UserDataItem.styled";

const UserDataForm = () => {
  const { data: user = [], isLoading, isError } = useGetUserQuery();
  const BASE_URL = "https://petly-be.herokuapp.com/";
  const imgUrl = user?.data?.result?.avatar;
  const imgAlt = user?.data?.result?.name;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const nameRegex = /[a-zA-Z]+/;
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  return (
    <UserBlock>
      {user.length === 0 ? (
        <div>not found</div>
      ) : (
        <>
          <BoxImg>
            <ImgUser src={imgUrl ? BASE_URL + imgUrl : devaultIcon} alt={imgAlt} />
            <EditImgBtn>
              <IconEditImgBtn />
              Edit photo
            </EditImgBtn>
          </BoxImg>
          <BoxInfo>
            <BoxTitle>
              <Block>
                <Form>
                  <BoxTitle>
                    <Title>Name:</Title>
                    <Block>
                      <UserDataItem
                        defaultValue={user.data.result.name}
                        name="name"
                        type="text"
                        pattern={nameRegex}
                        errorText="Enter only letters"
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>Email:</Title>
                    <Block>
                      <UserDataItem
                        defaultValue={user.data.result.email}
                        name={"email"}
                        type="email"
                        pattern={emailRegex}
                        errorText="Check your email"
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>Birthday:</Title>
                    <Block>
                      <UserDataItem
                        defaultValue={user.data.result.birthday}
                        name={"birthday"}
                        type="text"
                        pattern={dateRegexp}
                        errorText="Error. Example: 10.10.1990"
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>Phone:</Title>
                    <Block>
                      <UserDataItem
                        defaultValue={user.data.result.phone}
                        name={"phone"}
                        type="tel"
                        pattern={phoneRegex}
                        errorText="Number must be +3800000000 "
                      />
                    </Block>
                  </BoxTitle>
                  <BoxTitle>
                    <Title>City:</Title>
                    <Block>
                      <UserDataItem
                        defaultValue={user.data.result.city}
                        name={"city"}
                        type="text"
                        pattern={cityRegex}
                        errorText="Error. Example: Brovary, Kyiv"
                      />
                    </Block>
                  </BoxTitle>
                </Form>
              </Block>
            </BoxTitle>
          </BoxInfo>
        </>
      )}
    </UserBlock>
  );
};

// Image.devaultIcon

export default UserDataForm;
