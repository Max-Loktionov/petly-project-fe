import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AuthNavList = styled.ul`
  display: flex;
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

export const AuthNavItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  @media (min-width: 1280px) {
    :not(:last-child) {
      margin-right: 20px;
    }
  } ;
`;

export const StyledNavLink = styled(NavLink)``;
