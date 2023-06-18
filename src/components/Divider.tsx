import * as React from "react";
import "./Divider.css";
import { DividerProps } from "../interfaces";

export default function Divider({ color, margin }: DividerProps) {
  return (
    <div
      className="divider"
      style={{
        borderColor: `${color ? color : "#152236"}`,
        margin: `${margin ? margin : "20px 5vw 20px 5vw"}`,
      }}
    />
  );
}
