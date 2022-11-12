import styled from "styled-components";

export const BurgerMenuBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  height: 20px;
  z-index: 10;
  /* border: none; */
  background-color: transparent;
  @media (min-width: 768px) {
    top: 34px;
    right: 37px;
  }
  @media (min-width: 1280px) {
    visibility: hidden;
  }
`;
