import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav';
import { Container, Title } from "./NoticesPage.styled";
import { Outlet } from "react-router-dom";
import Modal from "components/Modal/Modal";
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";

const NoticesPage = () => {
  const token = useSelector(state => state.auth.token);
  const [isOpenModalAddNotice, setIsOpenModalAddNotice] = useState(false);

  const openModalAddNotice = e => {
    if (e) {
      setIsOpenModalAddNotice(true);
    }
  };

  const closeModalAddNotice = e => {
    if (e) {
      setIsOpenModalAddNotice(false);
    }
  };

  return (
    <Container>
      {isOpenModalAddNotice && (
        <Modal onClose={closeModalAddNotice}>
          <ModalAddNotice onClose={closeModalAddNotice} />
        </Modal>
      )}

      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList onModalOpen={openModalAddNotice} />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NoticesPage;
