import { useDispatch, useSelector } from "react-redux";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";
import { useGetNoticesQuery } from "redux/noticesApi";
import { useGetUserFavoriteQuery, useGetUserNoticesQuery } from "redux/userApi"; //useGetUserFavoriteQuery useGetUserNoticesQuery
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import { noticeActions } from "redux/notices/noticeSlice";
import { useGetUserQuery } from "redux/userApi";
import { useEffect, useState } from "react";

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

  const { data: user = [] } = useGetUserQuery();

  const favoriteNoticeId = user?.data?.result?.favoriteNoticeId;
  const notieceId = user?.data?.result?.notieceId;

  const { data = [], isLoading, isError } = useGetNoticesQuery({ filter, category, perPage, page });

  const { data: datatop = [] } = useGetUserFavoriteQuery();

  const { data: userNotice = [] } = useGetUserNoticesQuery();

  const [notices, setNotices] = useState([]);
  // const selectedCategory = category => {

  // };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (!datatop.data.result) {
      return;
    }
    if (!userNotice.data.result.userNotice) {
      return;
    }

    console.log(data);
    switch (category) {
      case "sell":
        return setNotices(data.notices);
      case "in_good_hands":
        return setNotices(data.notices);
      case "lost_found":
        return setNotices(data.notices);
      case "favorite":
        return setNotices(datatop.data.result);
      case "my_adds":
        return setNotices(userNotice.data.result.userNotice);
    }
  }, [data.notices, datatop.data.result, userNotice.data.result.userNotice]);

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
