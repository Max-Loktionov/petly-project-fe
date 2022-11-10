import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AuthNavList = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const AuthNavItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)``;
