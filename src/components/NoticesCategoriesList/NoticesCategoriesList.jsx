import { useDispatch, useSelector } from "react-redux";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";
import { useGetNoticesQuery } from "redux/noticesApi";
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import { noticeActions } from "redux/notices/noticeSlice";

const NoticesCategoriesList = () => {
  const modalAddNoticeState = useSelector(({ notice }) => notice.modalAddNotice.active);
  const modalViewNotice = useSelector(({ notice }) => notice.modalViewNotice.active);
  const page = useSelector(({ notice }) => notice.page);
  const perPage = useSelector(({ notice }) => notice.perPage);
  const category = useSelector(({ notice }) => notice.category);
  const filter = useSelector(({ notice }) => notice.filter);
  const favorite = useSelector(({ user }) => user.favorite);
  const userNotices = useSelector(({ user }) => user.userNotices);
  console.log("noticesCategoryList state:", favorite);
  console.log("noticesCategoryList category:", category);
  const { data = [], isLoading, isError } = useGetNoticesQuery({ filter, category, perPage, page });

  const { notices } = data;

  const selectedCategory = category => {
    switch (category) {
      case "sell" || "in_good_hands" || "lost_found":
        // const { data = [] } = useGetNoticesQuery({ filter, category, perPage, page });
        const { notices } = data;
        return notices;
      case "favorite":
        return notices;
      case "my_adds":
        return notices;
    }
  };

  // const renderByCategory = data?.notices;
  // const renderByOwn = own?.data.result.userNotice;
  // const renderByFavorite = favorite?.data.result;

  // console.log(renderByCategory);
  // console.log(renderByOwn);
  // console.log(renderByFavorite);

  // const setCategory = category => {
  //   switch (category) {
  //     case "sell":
  //       return "Sell";
  //     case "in_good_hands":
  //       return "In good hands";
  //     case "lost_found":
  //       return "Lost/found";
  //     default:
  //       return "No category";
  //   }
  // };

  // let render = renderByCategory;

  // if (category === "own") {
  //   render = renderByOwn;
  // }

  // if (category === "favorite") {
  //   render = renderByFavorite;
  // }

  return (
    <>
      <List>
        {!isLoading &&
          notices?.map(({ _id, image, title, breed, location, birthday, price, name, category }) => (
            <NoticeCategoryItem
              key={_id}
              id={_id}
              image={image}
              title={title}
              name={name}
              breed={breed}
              category={category}
              location={location}
              birthday={birthday}
              price={price}
            />
          ))}
      </List>

      {modalAddNoticeState && (
        <Modal modalName={"modalAddNotice"}>
          <ModalAddNotice />
        </Modal>
      )}

      {modalViewNotice && (
        <Modal modalName={"modalViewNotice"}>
          <ModalNotice />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
