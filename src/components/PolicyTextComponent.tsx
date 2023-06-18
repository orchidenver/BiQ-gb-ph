import * as React from "react";
import { PolicyTextProps } from "../interfaces";

import "../components/PolicyTextComponent.css";

export default function PolicyTextComponent({
  subhead,
  children,
}: PolicyTextProps) {
  return (
    <article>
      <h5 className="subhead">{subhead}</h5>
      <p className="sub-text">{children}</p>
    </article>
  );
}
