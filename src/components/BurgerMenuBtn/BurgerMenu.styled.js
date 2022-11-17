import styled from "styled-components";

export const BurgerMenuBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  height: 20px;
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
