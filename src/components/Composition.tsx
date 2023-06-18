import Divider from "./Divider";
import { useAppContext } from "../context/context";

import "./Composition.css";

export default function Composition() {
  const { lang } = useAppContext();

  const compositionEls: string[] = [
    "TDS mg/l",
    "143",
    "pH",
    "9.8",
    "Silica",
    "50",
    "HCO3",
    "9",
    "Ca",
    "2.3",
    "Na",
    "33",
    "SO4",
    "19",
  ];
  return (
    <article>
      <section className="container">
        <div className="item item-bold" id="item-head">
          {lang === "ENG" ? "Countries of origin" : "Kraje pochodzenia"}
        </div>
        <div className="item">Bulgaria</div>
      </section>
      <Divider />
      <section className="container">
        {compositionEls.map((el: string, i: number) => (
          <div className="item item-compos" key={el + i}>
            {el}
          </div>
        ))}
      </section>
    </article>
  );
}
