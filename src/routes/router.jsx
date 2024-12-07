import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../features/public/components/PublicLayout";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import NotFound from "../components/NotFound";
import dashboardRoute from "./dashboardRoute";
import Headers from "../features/public/components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [...publicRoute],
  },
  ...authRoute,
  ...dashboardRoute,
]);

export default router;