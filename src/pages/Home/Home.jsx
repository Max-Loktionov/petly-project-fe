import { LearnButton, Container } from "./Home.styled";
import Button from "components/Button";

const Home = () => {
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
