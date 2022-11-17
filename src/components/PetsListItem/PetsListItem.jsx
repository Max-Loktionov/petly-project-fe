import PropTypes from "prop-types";
import { useDeletePetMutation } from "redux/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  PetItem,
  InfoPet,
  Title,
  ImgPet,
  BoxInfo,
  DeleteBtm,
  DelIcon,
} from "./PetsListItem.styled";

const PetsListItem = ({ _id, name, birthday, breed, comments, avatar }) => {
  const [deletePet, { isLoading: isDeleting }] = useDeletePetMutation();
  console.log(avatar);
  isDeleting && toast(`${name} was removed`);

  return (
    <PetItem>
      <ImgPet src={`${avatar}`} alt={`${name}`}></ImgPet>
      <BoxInfo>
        <DeleteBtm
          type="button"
          disabled={isDeleting}
          onClick={() => deletePet(_id)}
        >
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
          {comments}
        </InfoPet>
      </BoxInfo>
      <ToastContainer />
    </PetItem>
  );
};

export default PetsListItem;

PetsListItem.prototype = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
