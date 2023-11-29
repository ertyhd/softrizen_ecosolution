import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "../components/Modal/Modal";
const Header = lazy(() => import("../modules/Header/Header"));
const MainPage = lazy(() => import("../pages/MainPage/MainPage"));

const SharedLayout = () => {
  return (
    <Suspense fallback={<Modal />}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<div>Not Found page</div>} />
      </Routes>
    </Suspense>
  );
};

export default SharedLayout;
