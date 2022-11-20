import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PrivatRoute,PublicRoute } from "./ProtectedRoutes";

import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

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
      <BrowserRouter basename="/petly-project-fe">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="friends" element={<OurFriendsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="notices" element={<NoticesPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="user" element={
                <PrivatRoute path="/login">
                  <UserPage />
                </PrivatRoute>} />
              <Route path='login' element={
                <PublicRoute path='/user' >
                  <LoginPage />
                </PublicRoute>
              } />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
