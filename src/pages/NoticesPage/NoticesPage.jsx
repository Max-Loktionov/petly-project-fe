import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { Title } from "./NoticesPage.styled";
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav';

const NoticesPage = () => {
  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);
  const token = useSelector(state => state.auth.token);

  const openModalNotice = e => {
    if (e) {
      setIsOpenModalNotice(true);
      console.log("NoticePage open:");
    }
  };

  const closeModalNotice = e => {
    if (e) {
      setIsOpenModalNotice(false);
    }
  };

  return (
    <>
      {isOpenModalNotice && (
        <Modal onClose={closeModalNotice}>
          <ModalNotice onClose={closeModalNotice} />
        </Modal>
      )}
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList onModalOpen={openModalNotice} />
    </>
  );
};

export default NoticesPage;
