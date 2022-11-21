import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const BurgerMenuBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 25px;
  border: none;
  z-index: 10;
  background-color: transparent;
  @media ${p => p.theme.media.tablet} {
    top: 34px;
    right: 37px;
  }
  @media ${p => p.theme.media.desktop} {
    visibility: hidden;
  }
`;

export const IconBurgerBtn = styled(GiHamburgerMenu)`
  width: 30px;
  height: 20px;
`;
