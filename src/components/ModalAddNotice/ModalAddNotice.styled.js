import Button from "components/Button";
import styled from "styled-components";
import { ReactComponent as Male } from "../../img/male.svg";
import { ReactComponent as Female } from "../../img/female.svg";
import { ReactComponent as ImageCross } from "../../img/image_cross.svg";

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

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.lx};
  }
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

  color: ${p =>
    p.color !== "accent" ? p.theme.colors.black : p.theme.colors.white};
  background-color: ${p =>
    p.color !== "accent" ? p.theme.colors.white : p.theme.colors.accent};

  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  @media ${p => p.theme.media.tablet} {
    margin: 0px 12px 0px 0px;

    font-size: ${p => p.theme.fontSizes.nl};
  }

  &:first-child {
    margin: 0px 0px 12px 0px;

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

export const InputsNames = styled.p`
  margin-bottom: 8px;

  font-size: ${p => p.theme.fontSizes.n};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.heading};

  &.icon_name {
    margin: 0px;
  }

  &.icon_header {
    margin-bottom: 18px;

    @media ${p => p.theme.media.tablet} {
      margin-bottom: 31px;
    }
  }

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.ml};
    margin-bottom: 12px;
  }

  & span {
    color: ${p => p.theme.colors.accent};

    @media ${p => p.theme.media.tablet} {
      font-size: ${p => p.theme.fontSizes.ml};
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 39px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 14px;
  }
`;

export const RadioInputs = styled.input`
  width: 0px;
  height: 0px;
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MyMaleSVG = styled(Male)`
  height: 36px;
  margin-bottom: 14px;

  @media ${p => p.theme.media.tablet} {
    height: 56px;
    width: 56px;
  }
`;

export const MyFemaleSVG = styled(Female)`
  width: 40px;
  margin-bottom: 14px;

  @media ${p => p.theme.media.tablet} {
    width: 56px;
    height: 56px;
  }
`;

export const ImageContainer = styled.div`
  @media ${p => p.theme.media.tablet} {
    margin-top: 28px;
  }

  & input {
    position: absolute;
    width: 0px;
    height: 0px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & #image-label {
    @media ${p => p.theme.media.tablet} {
      margin-top: 0px;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 140px;

  background-color: ${p => p.theme.colors.background};
  border-radius: 20px;

  background-repeat: no-repeat;
  background-size: cover;
`;

export const MyImageCross = styled(ImageCross)``;

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 32px;
  margin-bottom: 40px;

  @media ${p => p.theme.media.tablet} {
    margin-top: 40px;
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

    &.icon_label {
      margin: 0px;
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

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.heading};

  color: ${p => (p.active ? p.theme.colors.white : p.theme.colors.black)};
  border-color: ${p => p.theme.colors.accent};

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes.nl};
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
