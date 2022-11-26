import { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesList from "components/NoticesCategoriesList";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import { Container, Title } from "./NoticesPage.styled";
import { Outlet } from "react-router-dom";
import Modal from "components/Modal/Modal";
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";
import CategoryBtns from "components/CategoryBtns";

const NoticesPage = () => {
  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        {/* <CategoryBtns /> */}
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
      </Container>
    </>
  );
};

export default NoticesPage;
