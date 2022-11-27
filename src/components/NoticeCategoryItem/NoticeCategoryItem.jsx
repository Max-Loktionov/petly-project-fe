import { useState, useEffect } from "react";
import { useDeleteNoticeMutation } from "redux/noticesApi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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
import like from "img/like.svg";
import defoultImage from "../../img/defaultLogo.jpg";
import { noticeActions } from "redux/notices/noticeSlice";
import { userSlice } from "redux/user";
import { useAddFavoriteNoticeMutation, useDeleteFavoriteNoticeMutation } from "redux/userApi";

const NoticeCategoryItem = ({ id, name, title, birthday, breed, category, male, location, price, image, favoriteNoticeId, notieceId }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [isUserNotice, setIsUserNotice] = useState(false);
  const [deleteNotice, { isLoading: isDeleting }] = useDeleteNoticeMutation();
  const [addFavoriteNotice] = useAddFavoriteNoticeMutation();
  const [deleteFavoriteNotice] = useDeleteFavoriteNoticeMutation();
  const token = useSelector(({ auth }) => auth.token);
  const dispatch = useDispatch();
  const { userActions } = userSlice;
  const BASE_URL = "https://petly-be.herokuapp.com/";
  const openModalNotice = id => {
    dispatch(noticeActions.changeModalViewNotice(id));
    dispatch(noticeActions.changeModalNoticeId(id));
  };

  useEffect(() => {
    checkFavorite(favoriteNoticeId, id);
    checkToUserNotice(notieceId, id);
  }, [favoriteNoticeId, id, notieceId]);

  const checkFavorite = (favoriteNoticeId, id) => {
    if (!favoriteNoticeId) {
      return;
    }
    const filterednotice = favoriteNoticeId.find(notice => notice === id);

    if (filterednotice) {
      setFavorite(true);
    }
  };

  const checkToUserNotice = (notieceId, id) => {
    if (!notieceId) {
      return;
    }
    const filteredNotice = notieceId.find(notice => notice === id);

    if (filteredNotice) {
      setIsUserNotice(true);
    }
  };

  const currentAge = date => {
    if (!date) {
      return "";
    }

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

  const handleClickFavorite = () => {
    if (!token) {
      toast.warn("😹 signUp first");
      return;
    }
    if (isFavorite) {
      deleteFavoriteNotice(id);
      dispatch(userActions.deleteFavorite(id));
      return setFavorite(false);
    }
    addFavoriteNotice(id);
    dispatch(userActions.addFavorite(id));
    return setFavorite(true);
  };

  return (
    <Item>
      <ImageThumb>
        <Image src={image ? BASE_URL + image : defoultImage} alt={title}></Image>
        <Category>{category}</Category>
        <BtnFavorite type="button" onClick={handleClickFavorite}>
          <img src={isFavorite ? like : unlike} alt="unlike" />
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
      {isUserNotice && (
        <ButtonMore type="button" disabled={isDeleting} onClick={() => deleteNotice(id)}>
          Delete
        </ButtonMore>
      )}
    </Item>
  );
};

export default NoticeCategoryItem;
