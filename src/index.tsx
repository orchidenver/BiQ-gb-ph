import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { AppProvider } from "./context/context";
import MainPage from "./pages/MainPage";
import Shop from "./pages/Shop";
import Page404 from "./pages/Page404";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Policy from "./pages/Policy";
import Cookies from "./pages/Cookies";
import CookiesModal from "./components/CookiesModal";
import { useCookies } from "react-cookie";

import "./index.css";
import "./fonts/nexa-heavy.ttf";

function Layout() {
  const [cookies] = useCookies(["cookieConsent"]);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      {!cookies.cookieConsent && <CookiesModal />}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "cookies",
        element: <Cookies />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
