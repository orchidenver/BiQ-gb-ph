import { useAppContext } from "../context/context";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./CookiesModal.css";

export default function CookiesModal() {
  const { lang } = useAppContext();
  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  function giveCookieConsent() {
    setCookies("cookieConsent", true, { path: "/" });
  }

  return createPortal(
    <aside className="cookies">
      <p className="cookies-header">
        {lang === "ENG" ? (
          "Accept Cookies Notification"
        ) : (
          <>
            <span>Powiadomienie o akceptacji</span>
            <br />
            <span>plików cookie</span>
          </>
        )}
      </p>
      <p
        className="cookies-text"
        style={{ fontSize: lang === "ENG" ? "14px" : "12px" }}
      >
        {lang === "ENG"
          ? "This website uses cookies to enhance your browsing experience and provide personalized services. By continuing to browse this site, you consent to the use of cookies in accordance with our Cookie Policy."
          : "Ta strona internetowa używa plików cookie w celu ulepszenia Twojego doświadczenia podczas przeglądania i świadczenia spersonalizowanych usług. Kontynuując korzystanie z tej strony, wyrażasz zgodę na używanie plików cookie zgodnie z naszą Polityką plików cookie. "}
        <Link className="cookies-ref" to="cookies">
          {lang === "ENG" ? "Learn more" : "Czytaj więcejj"}
        </Link>
      </p>
      <div className="cookies-btns">
        <button
          className="cookies-btn color"
          onClick={giveCookieConsent}
          style={{ fontSize: lang === "ENG" ? "14px" : "12px" }}
        >
          {lang === "ENG" ? "Accept All" : "Akceptuj wszystkie"}
        </button>
      </div>
    </aside>,
    document.getElementById("cookies")!
  );
}
