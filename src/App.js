import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LandingPage from "./pages/Landing/Landing.jsx";
import React from "react";

import i18n from "./i18n/i18n.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div></div>,
      loader: async () => {
        return redirect(i18n.language);
      },
    },
    {
      path: "/:lang",
      element: <LandingPage />,
      loader: async ({ params }) => {
        if (![...i18n.options.supportedLngs].includes(params.lang)) {
          return redirect(`/${i18n.language}`);
        }
        i18n.changeLanguage(params.lang);
        return {};
      },
    },
    {
      path: "*",
      element: <div>404</div>,
      loader: async () => {
        return redirect(`/${i18n.language}`);
      },
    },
  ]);

  return <RouterProvider router={router} />;
}
