import PropTypes from "prop-types";
import { useDeletePetMutation } from "redux/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import devaultIcon from "../../img/default-icon-pets.png";
import { PetItem, InfoPet, Title, ImgPet, BoxInfo, DeleteBtm, DelIcon } from "./PetsListItem.styled";

const BASE_URL = "https://www.gravatar.com/avatar/";

const PetsListItem = ({ id, name, birthday, breed, comment, avatar }) => {
  const [deletePet, { isLoading: isDeleting }] = useDeletePetMutation();
  console.log(avatar);
  isDeleting && toast(`${name} was removed`);
  // const imgUrl = user?.data?.result?.avatar;
  const img = BASE_URL + avatar;
  console.log(img);

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
