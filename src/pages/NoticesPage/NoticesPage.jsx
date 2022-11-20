import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav';
import { Container, Title } from "./NoticesPage.styled";
import { Outlet } from "react-router-dom";

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
    <Container>
      {isOpenModalNotice && (
        <Modal onClose={closeModalNotice}>
          <ModalNotice onClose={closeModalNotice} />
        </Modal>
      )}
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList onModalOpen={openModalNotice} />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default NoticesPage;
