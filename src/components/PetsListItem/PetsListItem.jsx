import PropTypes from "prop-types";
import { useDeletePetMutation } from "redux/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import devaultIcon from "../../img/default-icon-pets.png";
import { PetItem, InfoPet, Title, ImgPet, BoxInfo, DeleteBtm, DelIcon } from "./PetsListItem.styled";

const PetsListItem = ({ id, name, birthday, breed, comment, avatar }) => {
  const [deletePet, { isLoading: isDeleting }] = useDeletePetMutation();

  isDeleting && toast.success(`😿 ${name} was removed`);

  const SERVER_NAME = process.env.REACT_APP_SITE_URL;
  const BASE_URL = `${SERVER_NAME}/`;

  // const BASE_URL = "https://petly-be.herokuapp.com/";   //is not using now

  return (
    <PetItem>
      <ImgPet src={avatar ? BASE_URL + avatar : devaultIcon} alt={`${name}`}></ImgPet>
      <BoxInfo>
        <DeleteBtm type="button" disabled={isDeleting} onClick={() => deletePet(id)}>
          <DelIcon />
        </DeleteBtm>
        <InfoPet>
          <Title>Name: </Title>
          {name}
        </InfoPet>
        <InfoPet>
          <Title>Date of birth: </Title>
          {birthday}
        </InfoPet>
        <InfoPet>
          <Title>Breed: </Title>
          {breed}
        </InfoPet>
        <InfoPet>
          <Title>Comments: </Title>
          {comment}
        </InfoPet>
      </BoxInfo>
      <ToastContainer />
    </PetItem>
  );
};

export default PetsListItem;

PetsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
