import { Children, lazy } from "react";

import BookingPage from "../features/auth/pages/BookingPage";
import BlogPage from "../features/public/pages/BlogPage";
import Rooms from "../features/public/pages/Rooms";
import ServicesPage from "../features/public/pages/ServicesPage";
import roomsRoute from "./roomsRoute";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "rooms",
    element: <Rooms />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "booking",
    element: <BookingPage />,
  },
  ...roomsRoute
];

export default publicRoute;
