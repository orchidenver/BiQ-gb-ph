import * as React from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Button from "../components/Button";
import TextBlock from "../components/TextBlock";
import ImgComponent from "../components/ImgComponent";
import Composition from "../components/Composition";
import { useAppContext } from "../context/context";
import { Helmet } from "react-helmet";

import "./MainPage.css";

import productImg from "../assets/product-example.jpg";
import productImg2 from "../assets/product-example-2.jpg";
import logo from "../assets/logo.jpg";
import promo from "../assets/promo.jpg";

export default function MainPage() {
  const { lang } = useAppContext();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="BiQ pH - is a site about the power of water"
        />
        <title>BiQ pH</title>
      </Helmet>
      <Banner />
      <main>
        <div className="moto">
          <h1
            style={{
              width: lang === "ENG" ? 195 : 290,
            }}
          >
            {lang === "ENG" ? "BE QUALITY WATER" : "BĄDŹ JAKOŚCIOWĄ WODĄ"}
          </h1>
        </div>
        <ImgComponent link={promo} altText="promo" banner={false} />
        <Divider />
        <TextBlock
          header={lang === "ENG" ? "Natural being" : "Naturalne istnienie"}
          element="DIV"
        >
          {
            <>
              <p className="list-block-paragraph">
                {lang === "ENG"
                  ? "All of us are born by nature, from nature, of nature. Our bodies are made of water, so pH water is vital because:"
                  : "Wszyscy jesteśmy narodzeni przez naturę, z natury, z natury. Nasze ciała są zbudowane z wody, dlatego woda o pH jest niezbędna, ponieważ:"}
              </p>
              <ul>
                <li>
                  {lang === "ENG"
                    ? "The purity of water defines our quality of our life and wellbeing."
                    : "Czystość wody definiuje jakość naszego życia i dobre samopoczucie."}
                </li>
                <li>
                  {lang === "ENG"
                    ? "pH water is balanced correctly for natural beings."
                    : "Woda o pH jest właściwie zrównoważona dla istot naturalnych."}
                </li>
                <li>
                  {lang === "ENG"
                    ? "pH water is enriched with minerals from natural sources, right into the bottle."
                    : "Woda o pH jest wzbogacona minerałami z naturalnych źródeł, bezpośrednio do butelki."}
                </li>
              </ul>
              <p className="list-block-paragraph">
                {lang === "ENG"
                  ? "The higher the pH, the lower the number of hydrogen ions in the liquid — and the better for human health. Feel the invigorating energy that clear pH water brings to your day."
                  : "Im wyższe pH, tym mniejsza liczba jonów wodoru w płynie - i tym lepiej dla zdrowia człowieka. Poczuj energetyzującą energię, jaką czysta woda o pH wnosi w twoje życie."}
              </p>
            </>
          }
        </TextBlock>
        <Divider />
        <TextBlock header={lang === "ENG" ? "Water flow" : "Przepływ wody"}>
          {lang === "ENG"
            ? "This water comes from a source selected from over 50 springs in Europe. Our production recreates the water cycle as it has occurred in nature forever, long before human intervention. BiQ’s specially-designed process brings water from its source to your bottle. With distillation, purification, and flow patterns that replicate the temperature and pressure found in nature, we restore water to its naturally perfect state."
            : "Ta woda pochodzi z wybranej źródłowej z ponad 50 źródeł w Europie. Nasza produkcja odtwarza cykl wodny tak, jak działo się to naturalnie zawsze, dużo wcześniej niż interwencja człowieka. Proces specjalnie zaprojektowany przez BiQ przekształca wodę z jej źródła do Twojej butelki. Dzięki destylacji, oczyszczaniu i wzorców przepływu, które replikują temperaturę i ciśnienie występujące w naturze, przywracamy wodę do jej naturalnie doskonałego stanu."}
        </TextBlock>
        <ImgComponent link={productImg} altText="water" banner={false} />
        <TextBlock
          header={lang === "ENG" ? "Glass container" : "Szklany pojemnik"}
        >
          {lang === "ENG"
            ? "The glass bottle is environmentally friendly and preserves the temperature and natural taste of the water inside. The shape of the bottle is inspired by a moment of purity: when you see your own refection on the water's rippled surface."
            : "Szklana butelka jest przyjazna dla środowiska i zachowuje temperaturę oraz naturalny smak wody wewnątrz. Kształt butelki został zainspirowany momentem czystości: gdy widzisz swoje odbicie na zmarszczonym powierzchni wody."}
        </TextBlock>
        <Divider />
        <TextBlock
          header={lang === "ENG" ? "Stone bottle cap" : "Zrównoważone detale"}
        >
          {lang === "ENG"
            ? "The stone bottle cap ensures sustainable use, evokes a sense of harmony, and gives the feeling of being alone in the middle of nature — totally balanced, just still water and you."
            : "Korek z kamienia zapewnia zrównoważone użytkowanie, wywołuje poczucie harmonii i daje uczucie samotności pośrodku natury - całkowicie zbalansowanej, tylko ty i woda."}
        </TextBlock>
        <Divider />
        <TextBlock
          header={
            lang === "ENG" ? "Sustainable details" : "Zrównoważone detale"
          }
        >
          {lang === "ENG"
            ? "When water, glass, and stone come together, we only need one additional detail: a tamper-evident sticker to ensure your water is untouched. The sticker on the bottle is made of tyvek paper, so the whole bottle is recyclable and environmentally friendly."
            : "Kiedy woda, szkło i kamień łączą się, potrzebujemy tylko jednego dodatkowego detalu: plomby gwarantującej, że Twoja woda jest nietknięta. Plomba na butelce wykonana jest z papieru tyvek, dzięki czemu cała butelka jest nadająca się do recyklingu i przyjazna dla środowiska."}
        </TextBlock>
        <ImgComponent link={productImg2} altText="water" banner={false} />
        <div className="product-section">
          <div className="product-info-block">
            <span
              className="product-info-item bold"
              style={{
                fontSize: lang === "ENG" ? 20 : 16,
              }}
            >
              {lang === "ENG" ? "pH water" : "Woda Ph"}
            </span>
            <span
              className="product-info-item gray"
              style={{
                fontSize: lang === "ENG" ? 20 : 16,
              }}
            >
              0.3/0.7/1L
            </span>
          </div>
          <Button
            height={50}
            fontSize={lang === "ENG" ? 20 : 16}
            width={lang === "ENG" ? "40vw" : "45vw"}
          >
            {lang === "ENG" ? "More info" : "Dodatkowo"}
          </Button>
        </div>
        <ImgComponent link={logo} altText="logo" banner={false} />
        <Composition />
      </main>
    </>
  );
}
