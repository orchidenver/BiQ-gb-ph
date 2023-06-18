import { Helmet } from "react-helmet";
import "./Page404.css";

export default function Page404() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page not found" />
        <title>BiQ pH - Page 404</title>
      </Helmet>
      <section className="not-found">
        <p className="not-found-head">404</p>
        <p className="not-found-desc">Not Found</p>
        <p className="not-found-text">This page doesn’t exist</p>
      </section>
    </>
  );
}
