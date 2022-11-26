import styled from "styled-components";
import { ReactComponent as ImageCross } from "../../img/image_cross.svg";
import Button from "components/Button";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -12px -12px 0px;
`;

export const CategoryBtn = styled(Button)`
  font-size: ${p => p.theme.fontSizes.s};
  padding: 8px 28px;

  margin: 0px 12px 12px 0px;

  color: ${p => (p.active ? p.theme.colors.white : p.theme.colors.black)};
  background-color: ${p => (p.active ? p.theme.colors.accent : p.theme.colors.white)};

  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  &:active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const AddBtn = styled.button`
  position: fixed;

  bottom: 50px;
  right: 40px;

  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.accent};
  border: none;
  border-radius: 50%;

  z-index: 2;

  & p {
    color: ${p => p.theme.colors.white};
    font-weight: ${p => p.theme.fontWeights.heading};
  }
`;

export const Cross = styled(ImageCross)`
  margin-bottom: 5px;

  height: 21px;
  width: 21px;

  & path {
    stroke: white;
  }
`;
