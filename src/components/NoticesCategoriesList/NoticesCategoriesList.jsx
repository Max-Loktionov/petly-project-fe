import { useDispatch, useSelector } from "react-redux";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { List } from "./NoticesCategoriesList.styled";
import { useGetNoticesQuery } from "redux/noticesApi";
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import { noticeActions } from "redux/notices/noticeSlice";
import { useGetUserQuery } from "redux/userApi";

const NoticesCategoriesList = () => {
  const modalAddNoticeState = useSelector(({ notice }) => notice.modalAddNotice.active);
  const modalViewNotice = useSelector(({ notice }) => notice.modalViewNotice.active);
  const page = useSelector(({ notice }) => notice.page);
  const perPage = useSelector(({ notice }) => notice.perPage);
  const category = useSelector(({ notice }) => notice.category);
  const filter = useSelector(({ notice }) => notice.filter);
  const favorite = useSelector(({ auth }) => auth);
  const userNotices = useSelector(({ user }) => user.userNotices);
  console.log("noticesCategoryList state:", favorite);

  const { data = [], isLoading, isError } = useGetNoticesQuery({ filter, category, perPage, page });

  const { data: user = [] } = useGetUserQuery();
  const { notices } = data;
  const favoriteNoticeId = user?.data?.result?.favoriteNoticeId;
  const notieceId = user?.data?.result?.notieceId;

  if (!favoriteNoticeId || !notieceId) {
    return;
  }

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
