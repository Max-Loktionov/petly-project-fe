import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

import NoticesPage from "pages/NoticesPage/NoticesPage";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
<<<<<<< HEAD

const UserPage = lazy(() => import("../pages/UserPage"));
// const RegisterPage = lazy(() => import("../pages/RegisterPage"));
=======
const RegisterPage = lazy(() => import("../pages/AuthPages/RegisterPage"));
>>>>>>> d79bcbf134ec696695ce12e955d0c848ed47875e

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
              <Route path="notices" element={<NoticesPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
