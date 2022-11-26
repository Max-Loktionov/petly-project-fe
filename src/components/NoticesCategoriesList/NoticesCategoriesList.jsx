import { useDispatch, useSelector } from "react-redux";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";
import { useGetNoticesQuery } from "redux/noticesApi";
import { useGetUserFavoriteQuery, useGetUserNoticesQuery, useGetUserQuery } from "redux/userApi"; //useGetUserFavoriteQuery useGetUserNoticesQuery
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
  // const userNotices = useSelector(({ user }) => user.userNotices);
  // console.log("noticesCategoryList state:", favorite);
  // console.log("noticesCategoryList category:", category);

  const { data = [], isLoading, isError } = useGetNoticesQuery({ filter, category, perPage, page });
  // console.log("noticesCategoryList data:", data);
  const { data: datatop = [] } = useGetUserFavoriteQuery();
  // console.log("noticesCategoryList datatop:", datatop);

  const { data: userNotice = [] } = useGetUserNoticesQuery();
  // console.log("noticesCategoryList userNotice:", userNotice);

  const selectedCategory = category => {
    switch (category) {
      case "sell":
        return data.notices;
      case "in_good_hands":
        return data.notices;
      case "lost_found":
        return data.notices;
      case "favorite":
        return datatop.data.result;
      case "my_adds":
        return userNotice.data.result.userNotice;
      default:
        return;
    }
  };
  const { data: user = [] } = useGetUserQuery();
  const favoriteNoticeId = user?.data?.result?.favoriteNoticeId;
  const notieceId = user?.data?.result?.notieceId;
  if (!favoriteNoticeId || !notieceId) {
    return;
  }

  // const notices = selectedCategory(category);
  // const renderByCategory = data?.notices;
  // const renderByOwn = own?.data.result.userNotice;
  // const renderByFavorite = favorite?.data.result;

  // console.log(renderByCategory);
  // console.log(renderByOwn);
  // console.log(renderByFavorite);

  const setCategory = category => {
    switch (category) {
      case "sell":
        return "Sell";
      case "in_good_hands":
        return "In good hands";
      case "lost_found":
        return "Lost/found";
      default:
        return "No category";
    }
  };

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
          selectedCategory(category)?.map(({ _id, avatar, title, breed, location, birthday, price, name, category }) => (
            <NoticeCategoryItem
              key={_id}
              id={_id}
              image={avatar}
              title={title}
              name={name}
              breed={breed}
              category={setCategory(category)}
              location={location}
              birthday={birthday}
              price={price}
              favoriteNoticeId={favoriteNoticeId}
              notieceId={notieceId}
            />
          ))}
      </List>

      {modalAddNoticeState && (
        <Modal modalName={"modalAddNotice"} bigHeight>
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
