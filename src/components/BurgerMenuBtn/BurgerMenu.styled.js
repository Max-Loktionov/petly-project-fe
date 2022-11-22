import styled from "styled-components";
import { TfiMenu, TfiClose } from "react-icons/tfi";

export const BurgerMenuBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 25px;
  border: none;
  padding: 0px;
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

export const IconBurgerBtn = styled(TfiMenu)`
  width: 30px;
  height: 28px;
`;

export const IconCrossBtn = styled(TfiClose)`
  width: 30px;
  height: 28px;
`;
