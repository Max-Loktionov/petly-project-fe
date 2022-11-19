import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding-top: 30px;

  @media ${p => p.theme.media.tablet} {
    padding-top: 60px;
  }
`;
