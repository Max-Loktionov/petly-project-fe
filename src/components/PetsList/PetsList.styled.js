import styled from "styled-components";
import Button from "components/Button";

export const BoxPet = styled.section`
  @media ${p => p.theme.media.desktop} {
    width: 821px;
    height: 212px;
  }
`;

export const BoxTitlePet = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  justify-content: space-between;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 24px;
  }
`;

export const BoxBtn = styled.div`
  display: inline-flex;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
    display: none;
  }
  @media ${p => p.theme.media.desktop} {
    display: inline-flex;
  }
`;

export const TitleBtn = styled.p`
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;

export const TitlePet = styled.h2`
  color: ${p => p.theme.colors.primaryText};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: 20px;
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.tablet} {
    font-size: 28px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 28px;
  }
`;

export const BtnAddPet = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
  font-size: 50px;
  border-radius: ${p => p.theme.radii.round};
`;

export const BoxPetItem = styled.div``;
