import styled from "styled-components";
import SVG from "react-inlinesvg";

export const StyledSVG = styled(SVG)`
 width: 24px;
  height: 24px;
  & path {
    fill: ${({ color }) => color};`;
