import { useDispatch } from "react-redux";
import { authSlice } from "redux/auth";
import { useLogOutUserMutation } from "redux/auth/authApi";
import { userSlice } from "redux/user";
import { userApi } from "redux/userApi";
import { LogOut, LogOutIcon } from "./Logout.styled";

const Logout = () => {
  const dispatch = useDispatch();
  const [logOut] = useLogOutUserMutation();
  const { unsetToken } = authSlice;
  const { userActions } = userSlice;

  const handleLogOut = () => {
    logOut();
    dispatch(unsetToken());
    dispatch(userActions.unsetNotice());
    dispatch(userActions.unsetFavorite());
    dispatch(userApi.util.resetApiState());
  };

  return (
    <LogOut onClick={handleLogOut}>
      <LogOutIcon />
      log out
    </LogOut>
  );
};

export default Logout;
