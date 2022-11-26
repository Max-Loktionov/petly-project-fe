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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 24px;
  }
`;

export const BoxBtn = styled.div`
  display: inline-flex;
  align-items: center;
  @media ${p => p.theme.media.tablet} {
  }
  @media ${p => p.theme.media.desktop} {
    display: inline-flex;
  }
`;

export const TitleBtn = styled.p`
  margin-right: 15px;

  font-weight: ${p => p.theme.fontWeights.heading};
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
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;

  font-size: 50px;
  border-radius: ${p => p.theme.radii.round};
`;

export const BoxPetItem = styled.div``;
