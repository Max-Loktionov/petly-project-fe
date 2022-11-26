import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";

export const PetItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
    @media ${p => p.theme.media.desktop} {
      margin-bottom: 22px;
    }
  }
  padding: 20px;
  border-radius: ${p => p.theme.radii.cardPet};
  box-shadow: 7px 4px 14px ${p => p.theme.colors.shadowCard};
  background-color: ${p => p.theme.colors.white};
  @media ${p => p.theme.media.tablet} {
    display: flex;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 22px;
  }
`;
export const InfoPet = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.text};
  @media ${p => p.theme.media.tablet} {
    width: 471px;
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 580px;
  }
`;
export const Title = styled.span`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.heading};
  @media ${p => p.theme.media.tablet} {
    font-size: 16px;
  }
`;
export const ImgPet = styled.img`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: #e1e1e1;
  @media ${p => p.theme.media.tablet} {
    margin-right: 32px;
    margin-bottom: 0;
    width: 161px;
    height: 161px;
  }
`;
export const BoxInfo = styled.div`
  position: relative;
  width: 100%;
`;
export const DeleteBtm = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  right: 0;

  width: 20px;
  height: 20px;
  border: none;
  background-color: ${p => p.theme.colors.background};
  cursor: pointer;
  border-radius: ${p => p.theme.radii.round};
  border: none;
  @media ${p => p.theme.media.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const DelIcon = styled(HiTrash)`
  width: 20px;
  height: 20px;
  fill: rgba(17, 17, 17, 0.6);
  @media ${p => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;
