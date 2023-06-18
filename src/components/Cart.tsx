import { useState } from "react";
import { useAppContext } from "../context/context";
import Divider from "./Divider";
import Modal from "./Modal";
import { CartProps } from "../interfaces";

import bottleImg from "../assets/bottle-shop.jpg";
import boxImg from "../assets/box-shop-small.jpg";
import removeImg from "../assets/remove.svg";

import "./Cart.css";

export default function Cart({ open }: CartProps) {
  const {
    cart: { bottles, boxes },
    totalCartSum,
    removeItem,
    increaseBottle,
    increaseBox,
    decreaseBox,
    decreaseBottle,
    lang,
  } = useAppContext();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <aside className={open ? "sidebar active" : "sidebar"}>
      <Divider />
      {bottles.quantity > 0 ? (
        <>
          <article className="product">
            <section className="img-container">
              <img
                src={bottleImg}
                alt="product image"
                className="product-img bottle"
              />
            </section>
            <section className="product-info">
              <div className="product-desc">
                <p className="product-name">
                  {lang === "ENG" ? "Bottle" : "Butelka"}
                </p>
                <p className="product-capacity">{`${bottles.capacity}L`}</p>
              </div>
              <div className="product-quantity">
                <button
                  type="button"
                  className="product-amount-btn"
                  onClick={decreaseBottle}
                >
                  -
                </button>
                <h2 className="amount">{bottles.quantity}</h2>
                <button
                  type="button"
                  className="product-amount-btn"
                  onClick={increaseBottle}
                >
                  +
                </button>
              </div>
            </section>
            <section className="product-actions">
              <p className="product-price">{`${bottles.totalSum.toFixed(
                1
              )} zł`}</p>
              <button
                className="product-remove"
                onClick={() => removeItem("bottles")}
              >
                <img src={removeImg} alt="remove" />
              </button>
            </section>
          </article>
          <Divider />
        </>
      ) : null}
      {boxes.quantity > 0 ? (
        <>
          <article className="product">
            <section className="img-container">
              <img src={boxImg} alt="product image" className="product-img" />
            </section>
            <section className="product-info">
              <div className="product-desc">
                <p className="product-name">
                  {lang === "ENG" ? (
                    <span>Box 9pcs</span>
                  ) : (
                    <>
                      <span>Opakowanie</span>
                      <br />
                      <span>9szt.</span>
                    </>
                  )}
                </p>
                <p className="product-capacity">{`${boxes.capacity}L`}</p>
              </div>
              <div className="product-quantity">
                <button
                  type="button"
                  className="product-amount-btn"
                  onClick={decreaseBox}
                >
                  -
                </button>
                <h2 className="amount">{boxes.quantity}</h2>
                <button
                  type="button"
                  className="product-amount-btn"
                  onClick={increaseBox}
                >
                  +
                </button>
              </div>
            </section>
            <section className="product-actions">
              <p className="product-price">{`${boxes.totalSum.toFixed(
                1
              )} zł`}</p>
              <button
                className="product-remove"
                onClick={() => removeItem("boxes")}
              >
                <img src={removeImg} alt="remove" />
              </button>
            </section>
          </article>
          <Divider />
        </>
      ) : null}
      <div className="checkout">
        <div className="checkout-summary">{`${
          lang === "ENG" ? "Place an order" : "Złóż zamówienie"
        } ${totalCartSum.toFixed(1)} zł`}</div>
        <button
          className="checkout-btn"
          onClick={() => {
            setOpenModal(true);
          }}
          disabled={bottles.quantity === 0 && boxes.quantity === 0}
        >
          {lang === "ENG" ? "Checkout" : "Przejdź do kasy"}
        </button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </aside>
  );
}
