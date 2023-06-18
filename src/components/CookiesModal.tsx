import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./CookiesModal.css";

export default function CookiesModal() {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  function giveCookieConsent() {
    setCookies("cookieConsent", true, { path: "/" });
  }

  return createPortal(
    <aside className="cookies">
      <p className="cookies-header">Accept Cookies Notification</p>
      <p className="cookies-text" style={{ fontSize: 14 }}>
        This website uses cookies to enhance your browsing experience and
        provide personalized services. By continuing to browse this site, you
        consent to the use of cookies in accordance with our Cookie Policy.
        <Link className="cookies-ref" to="cookies">
          Learn more
        </Link>
      </p>
      <div className="cookies-btns">
        <button
          className="cookies-btn color"
          onClick={giveCookieConsent}
          style={{ fontSize: 14 }}
        >
          Accept All
        </button>
      </div>
    </aside>,
    document.getElementById("cookies")!
  );
}
