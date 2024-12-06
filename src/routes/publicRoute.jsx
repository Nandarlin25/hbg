import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
import { useLocation } from "react-router-dom";
import RoomDetail from "../features/Rooms/pages/RoomDetail"

const BookingDetailPage = lazy(() =>
  import("../features/public/pages/BookingDetailPage")
);
const BookingCompletePage = lazy(() =>
  import("../features/public/pages/BookingCompletePage")
);

const BookingPage = lazy(() => import("../features/auth/pages/BookingPage"));
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const Rooms = lazy(() => import("../features/public/pages/Rooms"));
const ServicesPage = lazy(() =>
  import("../features/public/pages/ServicesPage")
);
import Headers from "../features/public/components/Header";

const FAQPage = lazy(() => import("../features/public/pages/FAQPage"));
const PrivacyPolicyPage = lazy(() =>
  import("../features/public/pages/PrivacyPolicyPage")
);
const TermAndConditionPage = lazy(() =>
  import("../features/public/pages/TermAndConditionPage")
);

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));

// useLocation should be inside a component if you want to use it for logic
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
  {
    path: "/faq",
    element: (
      <Suspense fallback={<PageLoading />}>
        <FAQPage />
      </Suspense>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <Suspense fallback={<PageLoading />}>
        <TermAndConditionPage />
      </Suspense>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <Suspense fallback={<PageLoading />}>
        <PrivacyPolicyPage />
      </Suspense>
    ),
  },
  {
    path: "rooms/room-details/booking-details",
    element: (
      <Suspense fallback={<PageLoading />}>
        <BookingDetailPage />
      </Suspense>
    ),
  },
  {
    path: "rooms/room-details/booking-completed",
    element: (
      <Suspense fallback={<PageLoading />}>
        <BookingCompletePage />
      </Suspense>
    ),
  },
  {
    path: "rooms/room-details",
    element: (
      <Suspense fallback={<PageLoading />}>
        <RoomDetail/>
      </Suspense>
    ),
  },
];

export default publicRoute;
