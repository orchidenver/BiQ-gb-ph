import * as React from "react";
import { TextBlockProps } from "../interfaces";

import "./TextBlock.css";

export default function TextBlock({
  children,
  header,
  element,
}: TextBlockProps) {
  return (
    <section>
      <p className="text-block-header">{header}</p>
      {element === "DIV" ? (
        <div className="text-block-paragraph">{children}</div>
      ) : (
        <p className="text-block-paragraph">{children}</p>
      )}
    </section>
  );
}
