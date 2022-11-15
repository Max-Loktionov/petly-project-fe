import styled from "styled-components";
import { StyledButton } from "../Button/Button.styled";

export const Form = styled.form``;
export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  line-height: 1.37;

  color: ${p => p.theme.colors.primaryText};
`;
export const SubTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: 1.37;
  letter-spacing: -0.01em;

  color: ${p => p.theme.colors.black};
`;

export const Label = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 16px;
  }
  margin-bottom: 8px;
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primaryText};
`;

export const Input = styled.input`
  width: 100%;
  :not(:last-child) {
    margin-bottom: 2px;
  }
  padding: 11px 14px;
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.inputModal};
  border-radius: 40px;

  :focus {
    outline-color: ${p => p.theme.colors.inputModal};
  }
`;

export const ErrorText = styled.p`
  margin-left: 10px;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: italic;

  @media ${p => p.theme.media.tablet} {
    margin-left: 97px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const BtnBox = styled.div`
  margin-top: 40px;
`;

export const BtnCancel = styled(StyledButton)`
  @media ${p => p.theme.media.mobile} {
    width: 100%;
    display: block;
  }
`;
export const BtnNext = styled(StyledButton)`
  @media ${p => p.theme.media.mobile} {
    width: 100%;

    margin-bottom: 12px;

    display: block;
  }
`;
export const BtnBack = styled(StyledButton)`
  @media ${p => p.theme.media.mobile} {
    display: block;
    width: 100%;
  }
`;

export const BtnDone = styled(StyledButton)`
  @media ${p => p.theme.media.mobile} {
    margin-bottom: 12px;
    width: 100%;

    display: block;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;

  padding: 12px 14px;
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.inputModal};
  border-radius: 20px;
`;
