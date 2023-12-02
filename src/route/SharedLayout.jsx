import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Modal from "../components/Modal/Modal";
import Spiner from "../components/Spiner/Spiner";
const Header = lazy(() => import("../modules/Header/Header"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const SharedLayout = () => {
  return (
    <Suspense
      fallback={
        <Modal>
          <Spiner />
        </Modal>
      }
    >
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default SharedLayout;
