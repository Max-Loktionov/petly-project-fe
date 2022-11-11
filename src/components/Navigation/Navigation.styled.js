import styled from "styled-components";

export const NavContainer = styled.div`
  /* @media (max-width: 767px) {
    align-items: center;
  }
  @media ${p => p.theme.media.tablet} {
    margin-right: 92px;
  } */
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
  top: 54px;
  right: 0;
  z-index: 1;
  padding: 48px 15px;

  height: 100vh;
  width: 100%;
  background-color: ${p => p.theme.colors.background};
  /* background-color: #f59256; */
  visibility: visible;
  /* transform: translateX(100%); */
  transition: 0.5s;
  padding: 60px 20px;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 140px 24px;
    top: 75px;

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
