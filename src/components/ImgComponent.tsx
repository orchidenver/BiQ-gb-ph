import * as React from "react";
import { ImgComponentProps } from "../interfaces";
import "./ImgComponent.css";

export default function ImgComponent({
  link,
  altText,
  banner = false,
}: ImgComponentProps) {
  return (
    <img
      src={link}
      alt={altText}
      className="img"
      loading="lazy"
      style={{
        height: banner ? "100vh" : "auto",
        width: banner ? "100%" : "100vw",
        overflow: "hidden",
      }}
    />
  );
}
