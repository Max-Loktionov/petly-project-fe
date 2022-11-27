import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
  }
  @media ${p => p.theme.media.desktop} {
    width: 100%;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 10;

  height: 100vh;
  width: 100%;
  background-color: ${p => p.theme.colors.background};
  visibility: visible;
  transition: 0.5s;
  padding: 34px 20px;

  ${props => {
    switch (props.$mode) {
      case true:
        return css`
          visibility: visible;
        `;
      default:
        return css`
          visibility: hidden;
        `;
    }
  }}

  @media ${p => p.theme.media.tablet} {
    width: 100%;
    padding: 80px 24px;
    top: 75px;

    right: 0;
  }
  @media ${p => p.theme.media.desktop} {
    display: contents;
    position: static;
    transform: translateX(0);
    visibility: visible;
  }
`;
