import * as React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonInterface {
  children: string | JSX.Element;
  width: number | string;
  height: number | string;
  component?: string;
  fontSize?: number;
}

export default function Button({
  children,
  width,
  component,
  height,
  fontSize,
}: ButtonInterface) {
  return (
    <Link
      to="shop"
      className={`button ${component ? "button-banner" : ""}`}
      style={{ width, height, fontSize }}
    >
      {children}
    </Link>
  );
}
