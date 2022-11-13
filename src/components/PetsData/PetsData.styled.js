import styled from "styled-components";

export const PetItem = styled.div`
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
