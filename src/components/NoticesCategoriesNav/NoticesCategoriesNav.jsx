import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCategories, setUserCategories } from "redux/filterCategoriesSlice";
import { Button } from "./NoticesCategoriesNav.styled";
import { Link } from "react-router-dom";

const NoticesCategoriesNav = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isActive, setIsActive] = useState("sell");

  useEffect(() => {
    if (token) {
      setIsAuthorized(true);
    }
  }, [setIsAuthorized, token]);

  const handleClick = categoryName => {
    dispatch(setFilterCategories(categoryName));
    setIsActive(categoryName);
  };

  return (
    <>
      <Button active={isActive === "lost_found"} onClick={() => handleClick("lost_found")}>
        <Link to="lost_found">lost/found</Link>
      </Button>
      <Button active={isActive === "in_good_hands"} onClick={() => handleClick("in_good_hands")}>
        <Link to="in_good_hands">In good hands</Link>
      </Button>
      <Button active={isActive === "sell"} onClick={() => handleClick("sell")}>
        <Link to="sell">sell</Link>
      </Button>
      {isAuthorized && (
        <div>
          <Button onClick={() => handleClick("favorite")}>
            <Link to="favorite">Favorite ads</Link>
          </Button>
          <Button onClick={() => handleClick("own")}>
            <Link to="own">My ads</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default NoticesCategoriesNav;
