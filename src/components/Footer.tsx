import { useState, useEffect } from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import axios from "axios";
import { FooterFeedback } from "../interfaces";
import { responseHandler } from "../helpers";
import "./Footer.css";

export default function Footer() {
  const [footerEmailValue, setFooterEmailValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [footerTextValue, setFooterTextValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [success]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { status } = await axios.post<FooterFeedback>(
        "https://ohopewater.com/feedback",
        {
          email: footerEmailValue,
          message: footerTextValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (status !== 200 && status !== 201) {
        setSuccess(false);
        throw new Error("Something went wrong");
      }

      setSuccess(true);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setFooterTextValue("");
      setFooterEmailValue("");
    }
  }

  const enabled: boolean = !!footerTextValue && !!footerEmailValue;

  return (
    <footer className="footer">
      <h2>Contact us</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your e-mail"
          value={footerEmailValue}
          onChange={(e) => setFooterEmailValue(e.target.value)}
        />
        <label htmlFor="question">Question</label>
        <textarea
          name="question"
          id="question"
          placeholder="Enter your question"
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
          value={responseHandler(success, error)}
          disabled={!enabled}
        />
      </form>
      <Divider color="#ffffff" margin="20px 0" />
      <p className="footer-head">Be quality water</p>
      <Divider color="#ffffff" margin="20px 0" />
      <p className="ref">BiQ © 2023</p>
      <p className="ref">All rights reserved.</p>
      <p className="footer-policy">
        <Link to="policy">Privacy Policy.</Link>
        <Link to="cookies">Cookie Policy.</Link>
      </p>
    </footer>
  );
}
