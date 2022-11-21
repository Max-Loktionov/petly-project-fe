import { useState } from "react";
import { useSelector } from "react-redux";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { Container, Title } from "./NoticesPage.styled";
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
    <>
      {isOpenModalAddNotice && (
        <Modal onClose={closeModalAddNotice}>
          <ModalAddNotice onClose={closeModalAddNotice} />
        </Modal>
      )}
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <NoticesCategoriesList />
      </Container>
    </>
  );
};

export default NoticesPage;
