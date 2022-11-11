import styled from "styled-components";
import { StyledButton } from "components/Button/Button.styled";

export const LearnButton = styled(StyledButton)`
  padding: 8px 80px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  /* color: #010101; */
  color: ${p => p.theme.colors.inputModal};
  /* color: green; */
  @media ${p => p.theme.media.tablet} {
    color: ${p => p.theme.colors.accent};
  }
  @media ${p => p.theme.media.desktop} {
    color: ${p => p.theme.colors.white};
  }
`;
