import { useGetUserQuery, useUpdateUserAvatarMutation } from "redux/userApi";
import UserDataItem from "./UserDataItem";
import devaultIcon from "../../img/default-icon-user.png";

import {
  UserBlock,
  BoxImg,
  EditImgBtn,
  IconEditImgBtn,
  ImgUser,
  BoxInfo,
  BoxTitle,
  Title,
  Block,
  Form,
  ImageContainer,
} from "./UserDataItem.styled";
import { useForm } from "react-hook-form";
import { useState } from "react";

const UserDataForm = () => {
  const { data: user = [], isLoading, isError } = useGetUserQuery();
  const [changeUserAvatar] = useUpdateUserAvatarMutation();
  const [isChangeUserAvatar, setIsChangeUserAvatar] = useState(false);
  const [newUserAvatar, setNewUserAvatar] = useState();

  const { register } = useForm({
    mode: "onBlur",
  });
  const BASE_URL = "https://petly-be.herokuapp.com/";
  const imgUrl = user?.data?.result?.avatar;
  const imgAlt = user?.data?.result?.name;
  const birthday = user.data?.result?.birthday === "00.00.00" ? "01.01.1900" : user.data?.result?.birthday;
  const city = user.data?.result?.city === "no info" ? "City, region" : user.data?.result?.city;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const nameRegex = /[a-zA-Z]+/;
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  const handleImage = async e => {
    setIsChangeUserAvatar(true);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        const avatar = reader.result;
        setNewUserAvatar(avatar);
        const formad = new FormData();
        formad.append("avatar", e.target.files[0]);
        changeUserAvatar(formad);
      };
    }
  };

  return (
    <UserBlock>
      {user.length === 0 ? (
        <div>not found</div>
      ) : (
        <>
          <BoxImg>
            {!isChangeUserAvatar ? (
              <ImgUser id="img_container" src={imgUrl ? BASE_URL + imgUrl : devaultIcon} alt={imgAlt} />
            ) : (
              <ImgUser id="img_container" src={newUserAvatar} alt={imgAlt} />
            )}

            <EditImgBtn>
              <ImageContainer>
                <form>
                  <input name="userAvatar" type="file" id="userAvatar" {...register("avatar", {})} onChange={handleImage} />
                </form>
              </ImageContainer>
              <IconEditImgBtn />
              <label htmlFor="userAvatar"> Edit photo</label>
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
                        defaultValue={birthday}
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
                        defaultValue={city}
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
