import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import { Container, Title } from "./NoticesPage.styled";
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";

const NoticesPage = () => {
  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
      </Container>
    </>
  );
};

export default NoticesPage;
