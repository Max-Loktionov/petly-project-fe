import { useState } from "react";
import { useDeleteNoticeMutation } from "redux/noticesApi";

import {
  Item,
  ImageThumb,
  Image,
  Category,
  BtnFavorite,
  Title,
  ContainerDescription,
  Table,
  ButtonMore,
} from "./NoticeCategoryItem.styled";
import unlike from "img/unlike.svg";
import { useDispatch } from "react-redux";
import defoultImage from "../../img/defaultLogo.jpg";
import { noticeActions } from "redux/notices/noticeSlice";

const NoticeCategoryItem = ({ id, name, title, birthday, breed, category, male, location, price, image, userNoticeId }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [deleteNotice, { isLoading: isDeleting }] = useDeleteNoticeMutation();
  const dispatch = useDispatch();
  console.log(userNoticeId);
  const openModalNotice = id => {
    dispatch(noticeActions.changeModalViewNotice(id));
    dispatch(noticeActions.changeModalNoticeId(id));
  };

  const currentAge = date => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();

    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDay() - birthDate.getDay();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age === 0) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
        m--;
      }
    }

    return age ? age + " year" : m + " month";
  };

  const BASE_URL = "https://petly-be.herokuapp.com/";
  const filterednotice = userNoticeId.find(notice => notice === id);

  return (
    <Item>
      <ImageThumb>
        <Image src={image ? BASE_URL + image : defoultImage} alt={title}></Image>
        <Category>{category}</Category>
        <BtnFavorite type="button" onClick={() => console.log("isFavorite")}>
          <img src={unlike} alt="unlike" />
        </BtnFavorite>
      </ImageThumb>
      <div>
        <Title>{title}</Title>
        <ContainerDescription>
          <Table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Breed:</td>
                <td>{breed}</td>
              </tr>
              <tr>
                <td>Place:</td>
                <td>{location}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{currentAge(birthday)}</td>
              </tr>
              <tr style={category === "sell" ? { color: "transparent" } : { color: "" }}>
                <td>Price:</td>
                <td>{price}</td>
              </tr>
            </tbody>
          </Table>
        </ContainerDescription>
      </div>
      <ButtonMore active="true" type="button" onClick={() => openModalNotice(id)}>
        Learn more
      </ButtonMore>
      <button type="button" disabled={isDeleting} onClick={() => deleteNotice(id)}>
        Delete
      </button>
    </Item>
  );
};

export default NoticeCategoryItem;
