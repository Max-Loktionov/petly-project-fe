import { Header } from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader";

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
