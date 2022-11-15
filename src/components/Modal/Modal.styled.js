import styled from "styled-components";
import { ReactComponent as IconMenu } from "../../img/cross.svg";

export const MyBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.backdrop};
  backdrop-filter: blur(10px);

  z-index: 11;
  overflow-y: auto;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 280px;

  max-height: calc(100vh - 40px);

  padding: 60px 20px 40px;

  border-radius: 20px;

  background-color: ${p => p.theme.colors.white};

  @media ${p => p.theme.media.tablet} {
    padding: 32px 20px;

    width: 704px;
  }
`;

export const Exit = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 34px;
  height: 34px;

  border-radius: 50%;
  border: none;

  z-index: 10;
  background-color: ${p => p.theme.colors.background};

  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const ExitIcon = styled(IconMenu)`
  width: 16px;
  height: 16px;
  fill: ${p => p.theme.colors.black};

  @media ${p => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;
