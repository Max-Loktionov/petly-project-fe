import { Link } from "react-router-dom";
import Logo from "components/Logo";
import { Navigation } from "components/Navigation/Navigation";
import { Container } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};
