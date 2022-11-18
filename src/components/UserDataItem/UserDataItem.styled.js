import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { HiCamera } from "react-icons/hi2";

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 280px;
  min-height: 537px;
  padding: 12px;

  border-radius: ${p => p.theme.radii.cardPet};
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
  background-color: ${p => p.theme.colors.white};
  @media ${p => p.theme.media.tablet} {
    position: relative;

    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    min-height: 311px;
    padding: 24px 40px 24px 32px;

    border-radius: 0 ${p => p.theme.radii.cardPet} ${p => p.theme.radii.cardPet} 0;
  }
  @media ${p => p.theme.media.desktop} {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 580px;
    padding: 20px 16px 42px 16px;
  }
`;

export const BoxImg = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 36px;
  }
`;

export const ImgUser = styled.img`
  width: 233px;
  height: 233px;
  margin-bottom: 12px;

  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: #e1e1e1;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 0;
  }
`;
export const EditImgBtn = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  margin-left: auto;

  font-weight: ${p => p.theme.fontWeights.text};
  font-size: 12px;

  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${p => p.theme.colors.hoverBtn};
  }
  @media ${p => p.theme.media.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;

    margin: 0;
  }
`;

export const IconEditImgBtn = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-right: 4px;

  fill: ${p => p.theme.colors.accent};
`;

export const BoxInfo = styled.div`
  margin-bottom: 42px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 0;
    margin-right: 52px;
    margin-top: 16px;
    width: inherit;
  }
  @media ${p => p.theme.media.desktop} {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 46px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
    @media ${p => p.theme.media.desktop} {
      margin-bottom: 15px;
    }
  }
  @media ${p => p.theme.media.tablet} {
    width: 379px;
  }
`;

export const Title = styled.p`
  width: 64px;

  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.heading};
  @media ${p => p.theme.media.tablet} {
    width: 107px;
    font-size: 18px;
  }
`;
export const Text = styled.div`
  margin-left: 18px;

  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.text};
  @media ${p => p.theme.media.tablet} {
    margin-left: 12px;
    font-size: 18px;
  }
`;
export const Block = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  align-items: center;
`;
export const EditTextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  border: none;
  background-color: ${p => p.theme.colors.background};
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${p => p.theme.colors.hoverBtn};
  }
  @media ${p => p.theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const EditTextBtnIcon = styled(HiPencil)`
  width: 13px;
  height: 13px;

  color: ${p => p.theme.colors.accent};
  @media ${p => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;
