import { Children, lazy, Suspense } from "react";
import BlogDetailPage from "../features/public/pages/BlogDetailPage";

const BookingPage = lazy(() => import("../features/auth/pages/BookingPage"));
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const Rooms = lazy(() => import("../features/public/pages/Rooms"));
const ServicesPage = lazy(() =>
  import("../features/public/pages/ServicesPage")
);
const RoomsDetail = lazy(() =>
  import("../features/public/components/RoomsDetail")
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
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "rooms",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Rooms />
      </Suspense>
    ),
  },
  {
    path: "about-us",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUsPage />
      </Suspense>
    ),
  },
  {
    path: "services",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesPage />
      </Suspense>
    ),
  },
  {
    path: "contact-us",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ContactUsPage />
      </Suspense>
    ),
  },
  {
    path: "blog",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path:"blog-detail",
    element:<BlogDetailPage/>
  },
  {
    path: "booking",

    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <BookingPage />
      </Suspense>
    ),
  },
  {
    path: "/faq",

    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <FAQPage />
      </Suspense>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <TermAndConditionPage />
      </Suspense>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivacyPolicyPage />
      </Suspense>
    ),
  },
];

export default publicRoute;
