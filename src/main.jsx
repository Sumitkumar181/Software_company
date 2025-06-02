import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import "./index.css";

import App from "./App";

// const routes = [];

    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        {
            path: "",
            element: <HomePage />,
        },
        {
            path: "about",
            element: <AboutPage />,
        },
        {
            path: "services",
            element: <ServicesPage />,
        },
        {
            path: "contact",
            element: <ContactPage />,
        },
        ],
    },
    ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
