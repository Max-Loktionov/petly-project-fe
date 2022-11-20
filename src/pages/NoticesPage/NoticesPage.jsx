import { useState } from "react";
import { useSelector } from "react-redux";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import { Container, Title } from "./NoticesPage.styled";

const NoticesPage = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesList />
    </Container>
  );
};

export default NoticesPage;
