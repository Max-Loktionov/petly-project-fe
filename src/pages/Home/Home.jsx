import { LearnButton, Container } from "./Home.styled";
import Button from "components/Button";
import { useAddPetMutation, useDeletePetMutation, useGetUserQuery, useUpdateUserAvatarMutation } from "redux/userApi";

const Home = () => {
  // const { data, error } = useGetUserQuery();

  const [addPet] = useAddPetMutation();
  const newPet = { name: "vfv", age: 1 };
  const [deletePet] = useDeletePetMutation(); //{ isSuccess, isLoading }

  const [updateUserAvatar] = useUpdateUserAvatarMutation();
  useGetUserQuery();
  return (
    <>
      <Container>
        Home
        <Button active>sell</Button>
        <Button>lost/found</Button>
        <LearnButton disabled>Learn more</LearnButton>
        <button onClick={() => deletePet(10)}>deletePet</button>
        <button onClick={() => addPet(newPet)}>addPet</button>
        <button onClick={() => updateUserAvatar(newPet)}>updateUserAvatar</button>
      </Container>
    </>
  );
};

export default Home;
