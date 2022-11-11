import Logo from "components/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { Container } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};
