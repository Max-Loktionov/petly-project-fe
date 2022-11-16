import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import { Title } from "./NoticesPage.styled";

const NoticesPage = () => {
  return (
    <>
      <Title>Find your favorite pet</Title>

      <Modal tabletNoStandartWidth>
        <ModalNotice />
      </Modal>
    </>
  );
};

export default NoticesPage;
