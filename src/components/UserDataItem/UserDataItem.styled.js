import styled from "styled-components";
import { TbLogout } from "react-icons/tb";
// import { TbLogout } from "react-icons/tb";

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
    border-radius: 0 ${p => p.theme.radii.cardPet} ${p => p.theme.radii.cardPet} 0;
    width: 736px;
    min-height: 311px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 411px;
    min-height: 580px;
  }
`;
export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;
export const ImgUser = styled.img`
  display: block;
  margin-bottom: 12px;
  width: 233px;
  height: 233px;
  border-radius: ${p => p.theme.radii.round};
  background-color: #e1e1e1;
  /* @media ${p => p.theme.media.tablet} {
    margin-right: 32px;
    margin-bottom: 0;
    width: 161px;
    height: 161px;
  } */
`;
export const EditImgBtn = styled.button`
  margin-bottom: 32px;
  margin-left: auto;
`;

export const BoxInfo = styled.div`
  margin-bottom: 42px;
`;
export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.text};
  /* @media ${p => p.theme.media.tablet} {
    width: 471px;
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 580px;
  } */
`;
export const Title = styled.p`
  min-width: 64px;
  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.heading};
  /* @media ${p => p.theme.media.tablet} {
    width: 471px;
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 580px;
  } */
`;
export const Text = styled.div`
  margin-left: 18px;

  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.text};
  /* @media ${p => p.theme.media.tablet} {
    font-size: 16px;
  } */
`;
export const Block = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  align-items: center;
`;
export const EditTextBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
`;

export const EditTextBtnIcon = styled(TbLogout)`
  width: 12px;
  height: 12px;
  color: ${p => p.theme.colors.accent};
`;

export const LogOut = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  margin-bottom: 8px;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.greyText};
  font-size: 16px;
  font-weight: 500;
`;
export const LogOutIcon = styled(TbLogout)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: ${p => p.theme.colors.accent};
`;
