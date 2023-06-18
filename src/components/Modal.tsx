import * as React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/context";
import { ModalProps } from "../interfaces";

import "./Modal.css";

export default function Modal({ btnText, open, onClose }: ModalProps) {
  const [cartEmailValue, setCartEmailValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const { openCart, resetOrder } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [success]);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    setCartEmailValue("");
    resetOrder();
    navigate("/");
    openCart();
    setSuccess(true);
  }

  if (!open) return null;
  return createPortal(
    <>
      <div className="overlay" />
      <aside className="modal">
        <p className="modal-head">Great choice!</p>
        <p className="modal-text" style={{ fontSize: 16 }}>
          At the moment this product is out of stock. Please leave your email,
          and as soon as pure water flows into the bottles, we'll notify you
          first.
        </p>
        {success && (
          <button className="modal-btn" onClick={onClose}>
            Stay tuned!
          </button>
        )}
        <button className="modal-btn-close" onClick={onClose}>
          ╳
        </button>
        {!success && (
          <form className="modal-form" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="modal-email"
              placeholder="Enter your email"
              value={cartEmailValue}
              onChange={(e) => setCartEmailValue(e.target.value)}
            />
            <button
              className="send-btn"
              type="submit"
              disabled={!cartEmailValue}
            >
              ᐳ
            </button>
          </form>
        )}
      </aside>
    </>,
    document.getElementById("modal")!
  );
}
