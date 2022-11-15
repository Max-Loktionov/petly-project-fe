import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

import NoticesPage from "pages/NoticesPage/NoticesPage";
import Modal from "./Modal/Modal";
import ModalAddPet from "./ModalAddPet";
import ModalNotice from "./ModalNotice";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const RegisterPage = lazy(() => import("../pages/AuthPages/RegisterPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/petly-project-fe">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="notices" element={<NoticesPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Modal>
            <ModalNotice />
          </Modal>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
