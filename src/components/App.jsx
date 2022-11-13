import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

import RegisterPage from "pages/AuthPages/RegisterPage";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const UserPage = lazy(() => import("../pages/UserPage"));
// const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/petly-project-fe">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<UserPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
