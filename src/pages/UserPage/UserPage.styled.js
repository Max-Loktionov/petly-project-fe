import styled from "styled-components";

export const UserPageContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media ${p => p.theme.media.mobile} {
    width: 320px;
  }
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    padding-left: 0px;
    padding-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    display: flex;
    padding-left: 0px;
    padding-right: 16px;
    width: 1280px;
  }
`;

export const BoxUser = styled.section`
  margin-bottom: 40px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;
export const BoxTitleUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  margin-left: 32px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-left: 16px;
    margin-bottom: 24px;
  }
`;

export const TitleUser = styled.h2`
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

export const UserBlock = styled.div`
  width: 280px;
  height: 537px;
  background-color: white;
  border: 1px solid black;
  @media ${p => p.theme.media.tablet} {
    border-radius: 0 40px 40px 0;
    width: 736px;
    height: 311px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 411px;
    height: 580px;
    border-radius: 0 40px 40px 0;
  }
`;

export const BoxPet = styled.section`
  @media ${p => p.theme.media.tablet} {
    margin-left: 32px;
  }
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
`;
export const BoxBtnTablet = styled(BoxBtn)`
  display: none;
  @media ${p => p.theme.media.tablet} {
    display: inline-flex;
  }
`;

export const TitleBtn = styled.p`
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;

export const TitlePet = styled(TitleUser)``;
export const BtnAddPet = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;
export const BoxPetItem = styled.div`
  gap: 20px;
`;

export const PetBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
    @media ${p => p.theme.media.desktop} {
      margin-bottom: 22px;
    }
  }
  border-radius: 40px;
  width: 280px;
  height: 537px;
  background-color: white;
  border: 1px solid black;
  @media ${p => p.theme.media.tablet} {
    width: 704px;
    height: 230px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 821px;
    height: 212px;
    margin-bottom: 22px;
  }
`;
