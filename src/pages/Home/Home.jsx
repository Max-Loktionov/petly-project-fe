import { LearnButton, Container } from "./Home.styled";
import Button from "components/Button";
import { useAddPetMutation, useDeletePetMutation, useGetUserQuery } from "redux/userApi";

const Home = () => {
  const { data, error } = useGetUserQuery();
  console.log("data", data);
  console.log("error", error);

  const [addPet] = useAddPetMutation();
  const newPet = { name: "vfv", age: 1 };
  const [deletePet, { isSuccess, isLoading }] = useDeletePetMutation();
  console.log("isSuccess", isSuccess);
  console.log("isLoading", isLoading);

  return (
    <>
      <Container>
        Home
        <Button active>sell</Button>
        <Button>lost/found</Button>
        <LearnButton disabled>Learn more</LearnButton>
        <Button onClick={() => deletePet(10)}>deletePet</Button>
        <Button onClick={() => addPet(newPet)}>addPet</Button>
      </Container>
    </>
  );
};

export default Home;
