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
  @media (min-width: 1280px) {
    :not(:last-child) {
      margin-right: 20px;
    }
  } ;
`;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
