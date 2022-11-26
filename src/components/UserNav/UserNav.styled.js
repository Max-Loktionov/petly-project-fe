import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RiAccountCircleFill } from "react-icons/ri";

import { StyledButton } from "../Button/Button.styled";

export const AccountButton = styled(StyledButton)`
  padding: 8px 28px;
  @media ${p => p.theme.media.mobileM} {
    margin-bottom: 60px;
  }
  @media ${p => p.theme.media.tablet} {
    margin-left: auto;
    margin-right: 62px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 0px;
  }
`;

export const IconAccount = styled(RiAccountCircleFill)`
  width: 20px;
  height: 20px;

  @media ${p => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 14px;
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media ${p => p.theme.media.tablet} {
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    display: inline-block;
  } ;
`;
