import Button from "components/Button";
import styled from "styled-components";

export const Container = styled.div`
  font-size: ${p => p.theme.fontSizes.s};

  @media ${p => p.theme.media.tablet} {
    padding: 8px 60px;
  }
`;

export const Header = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: 20px;

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.nl};
    font-weight: ${p => p.theme.fontWeights.heading};
  }
`;

export const CategoryContainer = styled.div`
  margin: 28px 0px;
`;

export const MyBtn = styled.button`
  padding: 8px 27px;
  margin: 0px;

  color: ${p => (p.color !== "accent" ? p.theme.colors.accent : p.theme.colors.white)};
  background-color: ${p => (p.color !== "accent" ? p.theme.colors.white : p.theme.colors.accent)};
  border-color: ${p => p.theme.colors.accent};

  border: 2px solid;
  border-radius: 40px;

  @media ${p => p.theme.media.tablet} {
    margin: 0px 12px 0px 0px;

    font-size: ${p => p.theme.fontSizes.nl};
  }

  &:first-child {
    margin: 20px 0px 12px 0px;

    @media ${p => p.theme.media.tablet} {
      margin: 0px 12px 0px 0px;
    }
  }

  &:last-child {
    margin: 0px 0px 0px 8px;

    @media ${p => p.theme.media.tablet} {
      margin: 16px 0px 0px 0px;
    }
  }

  &:disabled {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }

  :hover:not(:disabled),
  :focus:not(:disabled) {
    border-color: ${p => p.theme.colors.hoverBtn};
  }
`;

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 32px;
  margin-bottom: 40px;

  @media ${p => p.theme.media.tablet} {
    margin-top: 28px;
  }

  & label {
    display: flex;
    flex-direction: column;

    &:not(:first-child) {
      margin-top: 16px;

      @media ${p => p.theme.media.tablet} {
        margin-top: 26px;
      }
    }

    & p {
      margin-bottom: 8px;

      font-size: ${p => p.theme.fontSizes.n};
      line-height: ${p => p.theme.lineHeights.body};
      font-weight: ${p => p.theme.fontWeights.heading};

      @media ${p => p.theme.media.tablet} {
        font-size: ${p => p.theme.fontSizes.ml};
      }

      & span {
        color: ${p => p.theme.colors.accent};

        @media ${p => p.theme.media.tablet} {
          font-size: ${p => p.theme.fontSizes.ml};
        }
      }
    }

    & input {
      padding: 11px 14px;

      background-color: ${p => p.theme.colors.input};

      border: 1px solid #f5925680;
      border-radius: 40px;

      font-size: ${p => p.theme.fontSizes.s};

      @media ${p => p.theme.media.tablet} {
        padding: 11px 16px;
        font-size: ${p => p.theme.fontSizes.m};
      }

      :hover:not(:disabled),
      :focus:not(:disabled) {
        border-color: ${p => p.theme.colors.hoverBtn};
      }

      &:placeholder-shown {
        color: ${p => p.theme.colors.placeholder};
      }
    }
  }
`;

export const BtnContainer = styled.div`
  @media ${p => p.theme.media.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const MoveBtn = styled(Button)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;

  @media ${p => p.theme.media.tablet} {
    width: 180px;
  }

  &:first-child {
    margin-bottom: 12px;

    @media ${p => p.theme.media.tablet} {
      margin-bottom: 0px;
      margin-left: 20px;
    }
  }
`;
