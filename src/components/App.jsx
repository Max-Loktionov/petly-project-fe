import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const OurFriendsPage = lazy(() => import("../pages/OurFriendsPage"));

export const App = () => {
  return (
    <BrowserRouter basename="/petly-project-fe">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="friend" element={<OurFriendsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
