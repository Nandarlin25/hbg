// Import necessary modules
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import publicRoute from "./publicRoute"; // Assuming your routes are defined here

// Create the router with the future flag
const router = createBrowserRouter(publicRoute, {
  future: {
    v7_startTransition: true, // Opt-in to the future behavior
  },
});

// Export the router
export default router;
