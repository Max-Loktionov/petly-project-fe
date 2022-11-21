import { useState } from "react";
import { useDeleteNoticeMutation } from "redux/noticesApi";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
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

const NoticeCategoryItem = ({ id, name, title, birthday, breed, male, location, price, image, onModalOpen }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [deleteNotice, { isLoading: isDeleting }] = useDeleteNoticeMutation();
  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);

  const openModalNotice = e => {
    if (e) {
      setIsOpenModalNotice(true);
    }
  };

  const closeModalNotice = e => {
    if (e) {
      setIsOpenModalNotice(false);
    }
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

  return (
    <>
      {isOpenModalNotice && (
        <Modal onClose={closeModalNotice}>
          <ModalNotice onClose={closeModalNotice} id={id} />
        </Modal>
      )}
      *
      <Item>
        <ImageThumb>
          <Image src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg" alt={title}></Image>
          <Category>Sell</Category>
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
                <tr>
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
    </>
  );
};

export default NoticeCategoryItem;
