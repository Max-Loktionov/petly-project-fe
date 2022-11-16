import styled from "styled-components";

export const Container = styled.div`
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Header = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};

  & + p {
    font-size: ${p => p.theme.fontSizes.m};
    margin-top: 20px;
  }
`;

export const MyBtn = styled.button`
  padding: 8px 27px;
  margin: 0px;

  color: ${p => (p.color !== "accent" ? p.theme.colors.accent : p.theme.colors.white)};
  background-color: ${p => (p.color !== "accent" ? p.theme.colors.white : p.theme.colors.accent)};
  border-color: ${p => p.theme.colors.accent};

  border: 2px solid;
  border-radius: 40px;

  &:first-child {
    margin: 20px 0px 12px 0px;
  }

  &:last-child {
    margin: 0px 0px 0px 8px;
  }

  &:disabled {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  &[name="move-btn"] {
    margin: 0px 0px 12px;

    width: 100%;

    &:last-child {
      margin-bottom: 0px;
    }

    &[color="accent"] {
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.accent};
      border-color: ${p => p.theme.colors.accent};
    }
  }
`;

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 32px;
  margin-bottom: 40px;

  & label {
    display: flex;
    flex-direction: column;

    &:not(:first-child) {
      margin-top: 16px;
    }

    & p {
      margin-bottom: 8px;

      font-size: ${p => p.theme.fontSizes.n};
      line-height: ${p => p.theme.lineHeights.body};
      font-weight: ${p => p.theme.fontWeights.heading};

      & span {
        color: ${p => p.theme.colors.accent};
      }
    }

    & input {
      padding: 12px 14px;

      background-color: ${p => p.theme.colors.input};

      border: 1px solid #f5925680;
      border-radius: 40px;

      &:placeholder-shown {
        color: ${p => p.theme.colors.placeholder};
      }
    }
  }
`;
