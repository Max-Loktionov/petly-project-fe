import AddPetBtn from "components/AddPetBtn";
import { BoxBtn, TitleBtn } from "components/PetsData/PetsData.styled";
import { useDispatch, useSelector } from "react-redux";
import { noticeActions } from "redux/notices/noticeSlice";
import { AddBtn, CategoryBtn, CategoryContainer, Container, Cross } from "./NoticesCategoriesNav.styled";

function NoticesCategoriesNav() {
  const category = useSelector(({ notice }) => notice.category);
  const token = useSelector(({ auth }) => auth.token);
  const dispatch = useDispatch();

  const checkCategory = selectedCategory => (category === selectedCategory ? true : false);
  const handleClick = e => dispatch(noticeActions.changeCategory(e.target.name));
  const handleModalOpen = () => dispatch(noticeActions.changeModalAddNotice());

  return (
    <Container>
      <CategoryContainer>
        <CategoryBtn name="lost_found" active={checkCategory("lost_found")} onClick={handleClick}>
          Lost/found
        </CategoryBtn>
        <CategoryBtn name="in_good_hands" active={checkCategory("in_good_hands")} onClick={handleClick}>
          In good hands
        </CategoryBtn>
        <CategoryBtn name="sell" active={checkCategory("sell")} onClick={handleClick}>
          Sell
        </CategoryBtn>
        {token && (
          <>
            <CategoryBtn name="favorite" active={checkCategory("favorite")} onClick={handleClick}>
              Favorite adds
            </CategoryBtn>
            <CategoryBtn name="my_adds" active={checkCategory("my_adds")} onClick={handleClick}>
              My adds
            </CategoryBtn>
          </>
        )}
      </CategoryContainer>
      <BoxBtn>
        <TitleBtn>Add notice</TitleBtn>
        <AddPetBtn onClick={handleModalOpen} />
      </BoxBtn>
      {/* <AddBtn onClick={handleModalOpen}>
        <Cross />

        <p>Add pet</p>
      </AddBtn> */}
    </Container>
  );
}

export default NoticesCategoriesNav;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilterCategories, setUserCategories } from "redux/filterCategoriesSlice";
// import { Button } from "./NoticesCategoriesNav.styled";
// import { Link } from "react-router-dom";

// const NoticesCategoriesNav = () => {
//   const dispatch = useDispatch();
//   const token = useSelector(state => state.auth.token);

//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [isActive, setIsActive] = useState("sell");

//   useEffect(() => {
//     if (token) {
//       setIsAuthorized(true);
//     }
//   }, [setIsAuthorized, token]);

//   const handleClick = categoryName => {
//     dispatch(setFilterCategories(categoryName));
//     setIsActive(categoryName);
//   };

//   return (
//     <>
//       <Button active={isActive === "lost_found"} onClick={() => handleClick("lost_found")}>
//         <Link to="lost_found">lost/found</Link>
//       </Button>
//       <Button active={isActive === "in_good_hands"} onClick={() => handleClick("in_good_hands")}>
//         <Link to="in_good_hands">In good hands</Link>
//       </Button>
//       <Button active={isActive === "sell"} onClick={() => handleClick("sell")}>
//         <Link to="sell">sell</Link>
//       </Button>
//       {isAuthorized && (
//         <div>
//           <Button onClick={() => handleClick("favorite")}>
//             <Link to="favorite">Favorite ads</Link>
//           </Button>
//           <Button onClick={() => handleClick("own")}>
//             <Link to="own">My ads</Link>
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };

// export default NoticesCategoriesNav;
