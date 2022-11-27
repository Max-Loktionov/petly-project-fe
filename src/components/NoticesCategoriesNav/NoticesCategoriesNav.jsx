import AddPetBtn from "components/AddPetBtn";
import { BoxBtn, TitleBtn } from "components/PetsData/PetsData.styled";
import { useDispatch, useSelector } from "react-redux";
import { noticeActions } from "redux/notices/noticeSlice";
import { AddBtn, CategoryBtn, CategoryContainer, Container, Cross } from "./NoticesCategoriesNav.styled";
import { toast } from "react-toastify";
function NoticesCategoriesNav() {
  const category = useSelector(({ notice }) => notice.category);
  const token = useSelector(({ auth }) => auth.token);
  const dispatch = useDispatch();

  const checkCategory = selectedCategory => (category === selectedCategory ? true : false);
  const handleClick = e => dispatch(noticeActions.changeCategory(e.target.name));
  const handleModalOpen = () => {
    if (!token) {
      return toast.warn("😹 signUp or login first");
    }
    return dispatch(noticeActions.changeModalAddNotice());
  };

  const screenSize = window.innerWidth;

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
      {screenSize >= 768 && (
        <>
          <BoxBtn>
            <TitleBtn>Add pet</TitleBtn>
            <AddPetBtn onClick={handleModalOpen} />
          </BoxBtn>
        </>
      )}

      {screenSize < 768 && (
        <>
          <AddBtn onClick={handleModalOpen}>
            <Cross />

            <p>Add pet</p>
          </AddBtn>
        </>
      )}
    </Container>
  );
}

export default NoticesCategoriesNav;
