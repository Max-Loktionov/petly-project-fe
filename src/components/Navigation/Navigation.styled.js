import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 1280px) {
    width: 100%;
  }
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 48px 15px;

  height: 100vh;
  width: 100%;

  visibility: visible;
  /* transform: translateX(100%); */
  transition: 0.5s;

  @media screen and (min-width: 320px) {
    /* width: 250px; */
    padding: 100px 20px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 140px 24px;
    top: 48px;
    right: 0;
  }
  @media screen and (min-width: 1280px) {
    display: contents;
    position: static;
    transform: translateX(0);

    padding: 0;
    width: auto;
    height: auto;
    visibility: visible;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const BurgerMenuBtn = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  height: 20px;
  border: none;
  background-color: transparent;
  @media (min-width: 768px) {
    top: 34px;
    right: 37px;
  }
`;
