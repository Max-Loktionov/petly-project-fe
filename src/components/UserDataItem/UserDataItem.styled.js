import styled from "styled-components";

export const UserBlock = styled.div`
  width: 280px;
  min-height: 537px;
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
