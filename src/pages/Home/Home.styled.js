import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  /* color: #010101; */
  color: ${p => p.theme.colors.inputModal};
  color: green;
  @media ${p => p.theme.media.tablet} {
    color: red;
  }
  @media ${p => p.theme.media.desktop} {
    color: yellow;
  }
`;
