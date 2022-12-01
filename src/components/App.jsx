import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PrivatRoute, PublicRoute } from "./ProtectedRoutes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import NoticesCategoriesList from "./NoticesCategoriesList/NoticesCategoriesList";
import Loader from "./Loader";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const OurFriendsPage = lazy(() => import("../pages/OurFriendsPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const LoginPage = lazy(() => import("../pages/AuthPages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/AuthPages/RegisterPage"));
const UserPage = lazy(() => import("../pages/UserPage/UserPage"));
const NoticesPage = lazy(() => import("../pages/NoticesPage/NoticesPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="lost_found" element={<NoticesCategoriesList />} />
              <Route path="in_good_hands" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>
            <Route
              path="user"
              element={
                <PrivatRoute path="/login">
                  <UserPage />
                </PrivatRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute path="/user">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer position="top-center" autoClose={2500} />
    </ThemeProvider>
  );
};
