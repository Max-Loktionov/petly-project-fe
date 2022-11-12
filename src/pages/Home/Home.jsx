import { LearnButton, Container } from "./Home.styled";
import Button from "components/Button";
import { useGetUserQuery } from "redux/userApi";

const Home = () => {
  const { data, error } = useGetUserQuery();
  console.log("data", data);
  console.log("error", error);

  return (
    <>
      <Container>
        Home
        <Button active>sell</Button>
        <Button>lost/found</Button>
        <LearnButton disabled>Learn more</LearnButton>
      </Container>
    </>
  );
};

export default Home;
