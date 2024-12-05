import { Children, lazy, Suspense } from "react";
import BlogDetailPage from "../features/public/pages/BlogDetailPage";
import PageLoading from "../components/PageLoading";

const BookingPage = lazy(() => import("../features/auth/pages/BookingPage"));
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const Rooms = lazy(() => import("../features/public/pages/Rooms"));
const ServicesPage = lazy(() =>
  import("../features/public/pages/ServicesPage")
);

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
