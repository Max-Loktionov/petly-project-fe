import { useState } from "react";
import { useSelector } from "react-redux";
// import Modal from "components/Modal/Modal";
// import ModalNotice from "components/ModalNotice";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { Container, Title } from "./NoticesPage.styled";

const NoticesPage = () => {
  // const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);
  const token = useSelector(state => state.auth.token);

  // const openModalNotice = e => {
  //   if (e) {
  //     setIsOpenModalNotice(true);
  //   }
  // };

  // const closeModalNotice = e => {
  //   if (e) {
  //     setIsOpenModalNotice(false);
  //   }
  // };

  return (
    <Container>
      {/* {isOpenModalNotice && (
        <Modal onClose={closeModalNotice}>
          <ModalNotice onClose={closeModalNotice} />
        </Modal>
      )} */}
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesList />
    </Container>
  );
};

export default NoticesPage;
