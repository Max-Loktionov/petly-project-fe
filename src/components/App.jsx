import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import NoticesPage from "pages/NoticesPage/NoticesPage";
import Modal from "./Modal/Modal";
import ModalAddPets from "./ModalAddNotice";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const OurFriendsPage = lazy(() => import("../pages/OurFriendsPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const LoginPage = lazy(() => import("../pages/AuthPages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/AuthPages/RegisterPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/petly-project-fe">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="friends" element={<OurFriendsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="notices" element={<NoticesPage />} />
              <Route path="user" element={<UserPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Modal>
            <ModalAddPets />
          </Modal>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
