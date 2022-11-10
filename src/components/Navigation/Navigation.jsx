import { AuthNav } from "components/AuthNav/AuthNav";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { StyledSVG } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <Nav />
      <UserNav />
      <AuthNav />
      <button type="button">
        <StyledSVG width={30} height={20}>
          <use href="../../img/symbol-defs.svg#icon-menu"></use>
        </StyledSVG>
      </button>
    </>
  );
};
