import { Children, lazy, Suspense } from "react";

import BookingPage from "../features/auth/pages/BookingPage";
import BlogPage from "../features/public/pages/BlogPage";
import Rooms from "../features/public/pages/Rooms";
import ServicesPage from "../features/public/pages/ServicesPage";
import RoomsDetail from "../features/public/components/RoomsDetail";
import PageLoading from "../components/PageLoading";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));

const publicRoute = [
  {
    index: true,
    element: (
      <Suspense fallback={<PageLoading />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "rooms",
    element: (
      <Suspense fallback={<PageLoading />}>
        <Rooms />
      </Suspense>
    ),
  },
  {
    path: "about-us",
    element: (
      <Suspense fallback={<PageLoading />}>
        <AboutUsPage />
      </Suspense>
    ),
  },

  {
    path: "services",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ServicesPage />
      </Suspense>
    ),
  },
  {
    path: "contact-us",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ContactUsPage />
      </Suspense>
    ),
  },
  {
    path: "blog",
    element: (
      <Suspense fallback={<PageLoading />}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path: "booking",
    element: (
      <Suspense fallback={<PageLoading />}>
        <BookingPage />
      </Suspense>
    ),
  },
];

export default publicRoute;
