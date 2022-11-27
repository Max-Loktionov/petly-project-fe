import { useSelector } from "react-redux";
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import { useEffect, useState } from "react";
import NoticeAllList from "components/NoticeAllList";
import NoticeFavList from "components/NoticeFavList/NoticeFavList";
import NoticeMyList from "components/NoticeMyList";

const NoticesCategoriesList = () => {
  const modalAddNoticeState = useSelector(({ notice }) => notice.modalAddNotice.active);
  const modalViewNotice = useSelector(({ notice }) => notice.modalViewNotice.active);
  const page = useSelector(({ notice }) => notice.page);
  const perPage = useSelector(({ notice }) => notice.perPage);
  const category = useSelector(({ notice }) => notice.category);
  const filter = useSelector(({ notice }) => notice.filter);
  let favoriteNoticeId = useSelector(({ user }) => user.favorite);
  let notieceId = useSelector(({ user }) => user.favorite);
  const token = useSelector(({ auth }) => auth.token);

  const [categorySelect, setcategorySelect] = useState("sell");

  useEffect(() => {
    setcategorySelect(category);
  }, [category]);

  if (token) {
    if (!favoriteNoticeId || !notieceId) {
      return;
    }

    favoriteNoticeId = "";
    notieceId = "";
  }

  return (
    <>
      {token && categorySelect === "my_adds" && (
        <NoticeMyList
          filter={filter}
          category={categorySelect}
          perPage={perPage}
          page={page}
          favoriteNoticeId={favoriteNoticeId}
          notieceId={notieceId}
        />
      )}

      {token && categorySelect === "favorite" && (
        <NoticeFavList
          filter={filter}
          category={categorySelect}
          perPage={perPage}
          page={page}
          favoriteNoticeId={favoriteNoticeId}
          notieceId={notieceId}
        />
      )}
      {(categorySelect === "sell" || categorySelect === "in_good_hands" || categorySelect === "lost_found") && (
        <NoticeAllList
          filter={filter}
          category={categorySelect}
          perPage={perPage}
          page={page}
          favoriteNoticeId={favoriteNoticeId}
          notieceId={notieceId}
        />
      )}
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
