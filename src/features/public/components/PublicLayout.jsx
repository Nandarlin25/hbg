import React, { Suspense } from "react";
import { Outlet,ScrollRestoration,useLocation} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayout = () => {
  const { pathname } = useLocation();
  return (
    <main className=" flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
        <ScrollRestoration />

      </Suspense>
      <Footer />
    </main>
  );
};

export default PublicLayout;