import { useDispatch } from "react-redux";
import { authSlice } from "redux/auth";
import { useLogOutUserMutation } from "redux/auth/authApi";
import { LogOut, LogOutIcon } from "./Logout.styled";

const Logout = () => {
  const dispatch = useDispatch();
  const [logOut] = useLogOutUserMutation();
  const { unsetToken } = authSlice;

  const handleLogOut = () => {
    logOut();
    dispatch(unsetToken());
  };

  return (
    <LogOut onClick={handleLogOut}>
      <LogOutIcon />
      log out
    </LogOut>
  );
};

export default Logout;
