import Banner from "../components/Banner";
import Composition from "../components/Composition";
import ImgComponent from "../components/ImgComponent";
import Divider from "../components/Divider";
import { useAppContext } from "../context/context";
import { Helmet } from "react-helmet";

import logo from "../assets/logo.jpg";

import "./Shop.css";

export default function Shop() {
  const {
    cart: { bottles, boxes },
    totalCartSum,
    updateCapacity,
    increaseBottle,
    increaseBox,
    decreaseBox,
    decreaseBottle,
    openCart,
    changePrice,
  } = useAppContext();

  return (
    <>
      <Helmet>
        <meta name="description" content="Here you can buy our product" />
        <title>BiQ pH - Shop</title>
      </Helmet>
      <main>
        <Banner />
        <section className="shop">
          <p className="shop-head">pH</p>
          <p className="shop-head">WATER</p>
          <div className="capacity-btns">
            <button
              className={`${
                bottles.capacity === "0.3"
                  ? "capacity-btn active"
                  : "capacity-btn"
              }`}
              onClick={(e) => {
                updateCapacity(
                  (e.target as HTMLElement).textContent?.slice(0, -1)
                );
                changePrice(
                  (e.target as HTMLElement).textContent?.slice(0, -1)!
                );
              }}
            >
              0.3L
            </button>
            <button
              className={`${
                bottles.capacity === "0.7"
                  ? "capacity-btn active"
                  : "capacity-btn"
              }`}
              onClick={(e) => {
                updateCapacity(
                  (e.target as HTMLElement).textContent?.slice(0, -1)
                );
                changePrice(
                  (e.target as HTMLElement).textContent?.slice(0, -1)!
                );
              }}
            >
              0.7L
            </button>
            <button
              className={`${
                bottles.capacity === "1.0"
                  ? "capacity-btn active"
                  : "capacity-btn"
              }`}
              onClick={(e) => {
                updateCapacity(
                  (e.target as HTMLElement).textContent?.slice(0, -1)
                );
                changePrice(
                  (e.target as HTMLElement).textContent?.slice(0, -1)!
                );
              }}
            >
              1.0L
            </button>
          </div>
          <div className="shop-items">
            <div className="shop-item">
              <p className="shop-product">Bottle</p>
              <p className="shop-price">{`${bottles.price.toFixed(1)} £`}</p>
              <div className="shop-count">
                <button
                  type="button"
                  className="amount-btn"
                  onClick={decreaseBottle}
                >
                  —
                </button>
                <h2 className="amount">{bottles.quantity}</h2>
                <button
                  type="button"
                  className="amount-btn plus"
                  onClick={increaseBottle}
                >
                  +
                </button>
              </div>
            </div>
            <Divider color="#000000" margin="20px 0" />
            <div className="shop-item">
              <p className="shop-product">
                Box
                <br />
                <span className="currency">(9 pcs)</span>
              </p>
              <p className="shop-price">{`${boxes.price.toFixed(1)} £`}</p>
              <div className="shop-count">
                <button
                  type="button"
                  className="amount-btn"
                  onClick={decreaseBox}
                >
                  —
                </button>
                <h2 className="amount">{boxes.quantity}</h2>
                <button
                  type="button"
                  className="amount-btn plus"
                  onClick={increaseBox}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button className="cart-btn" onClick={openCart}>
            <div className="cart-btn-items">
              <span>{`${totalCartSum.toFixed(1)} £`}</span>
              <span>Add to cart</span>
            </div>
          </button>
        </section>

        <ImgComponent link={logo} altText="logo" banner={false} />
        <Composition />
      </main>
    </>
  );
}
