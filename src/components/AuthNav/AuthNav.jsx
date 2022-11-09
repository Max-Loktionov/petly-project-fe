import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </div>
  );
};
