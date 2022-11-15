import Button from "../Button";
import styled from "styled-components";

export const PictureData = styled.div`
  position: relative;
  width: 100%;
  height: 240px;

  background-image: ${props => `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 0px 0px 40px 40px;
`;

export const Cathegory = styled.p`
  position: absolute;
  top: 20px;
  padding: 6px;

  width: 158px;
  text-align: center;

  background-color: #ffffff99;
  backdrop-filter: blur(50px);

  border-radius: 0px 15px 15px 0px;
  overflow: hidden;
`;

export const Header = styled.h2`
  margin: 16px 0px;

  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const MyLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};

  &:not(:first-child) {
    padding-top: 8px;
  }

  & p {
    font-size: inherit;
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
`;

export const Comments = styled.p`
  margin: 28px 0px 40px;

  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  & span {
    font-weight: ${p => p.theme.fontWeights.text};
  }
`;

export const MyBtn = styled(Button)`
  justify-content: center;
  width: 100%;

  & span {
    margin-left: 9px;
  }

  &:last-child {
    margin-top: 12px;
  }
`;
