import { useState, useEffect } from "react";
import Divider from "./Divider";
import { useAppContext } from "../context/context";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Footer.css";

export default function Footer() {
  const [footerEmailValue, setFooterEmailValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [footerTextValue, setFooterTextValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [success, setSuccess] = useState<boolean>(false);
  const { lang } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [success]);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(true);

    // emailjs.sendForm(
    //   "YOUR_SERVICE_ID",
    //   "YOUR_TEMPLATE_ID",
    //   footerEmailValue,
    //   "YOUR_PUBLIC_KEY"
    // );

    setFooterTextValue("");
    setFooterEmailValue("");
  }

  const enabled: boolean = !!footerTextValue && !!footerEmailValue;

  return (
    <footer className="footer">
      <h2>{lang === "ENG" ? "Contact us" : "Skontaktuj się z nami"}</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder={
            lang === "ENG" ? "Enter your e-mail" : "Wpisz swój adres e-mail"
          }
          value={footerEmailValue}
          onChange={(e) => setFooterEmailValue(e.target.value)}
        />
        <label htmlFor="question">Question</label>
        <textarea
          name="question"
          id="question"
          placeholder={
            lang === "ENG" ? "Enter your question" : "Wpisz swoje pytanie"
          }
          cols={30}
          rows={7}
          value={footerTextValue}
          onChange={(e) => setFooterTextValue(e.target.value)}
          minLength={30}
          maxLength={100}
        ></textarea>
        <input
          className={!success ? "" : "success"}
          type="submit"
          value={
            !success
              ? lang === "ENG"
                ? "Send"
                : "Wyślij"
              : lang === "ENG"
              ? "Your message has been sent"
              : "Wiadomość wysłana"
          }
          disabled={!enabled}
        />
      </form>
      <Divider color="#ffffff" margin="20px 0" />
      <p className="footer-head">
        {lang === "ENG" ? "Be quality water" : "Bądź jakościową wodą"}
      </p>
      <Divider color="#ffffff" margin="20px 0" />
      <p className="ref">BiQ © 2023</p>
      <p className="ref">
        {lang === "ENG"
          ? "All rights reserved."
          : "Wszelkie prawa zastrzeżone."}
      </p>
      <p className="footer-policy">
        <Link to="policy">
          {lang === "ENG" ? "Privacy Policy." : "Polityka prywatności"}
        </Link>
        <Link to="cookies">
          {lang === "ENG"
            ? "Cookie Policy."
            : "Polityka dotycząca plików cookie."}
        </Link>
      </p>
    </footer>
  );
}
