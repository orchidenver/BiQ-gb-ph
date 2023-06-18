import { useAppContext } from "../context/context";
import { Helmet } from "react-helmet";
import "./Page404.css";

export default function Page404() {
  const { lang } = useAppContext();
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
        <title>BiQ pH - Page 404</title>
      </Helmet>
      <section className="not-found">
        <p className="not-found-head">404</p>
        <p className="not-found-desc">
          {lang === "ENG" ? "Not Found" : "Nie znaleziono"}
        </p>
        <p className="not-found-text">
          {lang === "ENG"
            ? "This page doesn’t exist"
            : "Ta strona nie istnieje"}
        </p>
      </section>
    </>
  );
}
