import { useState } from "react";
import Cart from "./Cart";
import { useAppContext } from "../context/context";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/Logo_BiQ-new.svg";
import shop from "../assets/shop.svg";
import close from "../assets/close.svg";

export default function NavBar() {
  const { cartVisible, openCart } = useAppContext();

  return (
    <div className="wrapper">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" />
        </Link>
        <button className="cart" onClick={openCart}>
          <img
            className="cart-img"
            src={!cartVisible ? shop : close}
            alt="cart"
            style={{
              height: !cartVisible ? "3vh" : "2vh",
            }}
          />
        </button>
      </nav>
      <Cart open={cartVisible} />
    </div>
  );
}
