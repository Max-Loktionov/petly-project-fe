import { PetItem, InfoPet, Title, ImgPet, BoxInfo, DeleteBtm, DelIcon } from "./PetsData.styled";
import { useDeletePetMutation } from "redux/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PetsData = ({ id, name, birthday, breed, comments, avatar }) => {
  const [deletePet, { isLoading: isDeleting }] = useDeletePetMutation();

  isDeleting && toast(`${name} was removed`);

  return (
    <PetItem>
      <ImgPet src={`${avatar}`} alt={`${name}`}></ImgPet>

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
          {comments}
        </InfoPet>
      </BoxInfo>
      <ToastContainer />
    </PetItem>
  );
};

export default PetsData;
