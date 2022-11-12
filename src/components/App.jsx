import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const OurFriendsPage = lazy(() => import("../pages/OurFriendsPage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename="/petly-project-fe">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="friend" element={<OurFriendsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
