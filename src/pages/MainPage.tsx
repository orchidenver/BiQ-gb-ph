import * as React from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Button from "../components/Button";
import TextBlock from "../components/TextBlock";
import ImgComponent from "../components/ImgComponent";
import Composition from "../components/Composition";
import { Helmet } from "react-helmet";

import "./MainPage.css";

import productImg from "../assets/product-example.jpg";
import productImg2 from "../assets/product-example-2.jpg";
import logo from "../assets/logo.jpg";
import promo from "../assets/promo.jpg";

export default function MainPage() {
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
              width: 195,
            }}
          >
            BE QUALITY WATER
          </h1>
        </div>
        <ImgComponent link={promo} altText="promo" banner={false} />
        <Divider />
        <TextBlock header="Natural being" element="DIV">
          {
            <>
              <p className="list-block-paragraph">
                All of us are born by nature, from nature, of nature. Our bodies
                are made of water, so pH water is vital because:
              </p>
              <ul>
                <li>
                  The purity of water defines our quality of our life and
                  wellbeing.
                </li>
                <li>pH water is balanced correctly for natural beings.</li>
                <li>
                  pH water is enriched with minerals from natural sources, right
                  into the bottle.
                </li>
              </ul>
              <p className="list-block-paragraph">
                The higher the pH, the lower the number of hydrogen ions in the
                liquid — and the better for human health. Feel the invigorating
                energy that clear pH water brings to your day.
              </p>
            </>
          }
        </TextBlock>
        <Divider />
        <TextBlock header="Water flow">
          This water comes from a source selected from over 50 springs in
          Europe. Our production recreates the water cycle as it has occurred in
          nature forever, long before human intervention. BiQ’s
          specially-designed process brings water from its source to your
          bottle. With distillation, purification, and flow patterns that
          replicate the temperature and pressure found in nature, we restore
          water to its naturally perfect state.
        </TextBlock>
        <ImgComponent link={productImg} altText="water" banner={false} />
        <TextBlock header="Glass container">
          The glass bottle is environmentally friendly and preserves the
          temperature and natural taste of the water inside. The shape of the
          bottle is inspired by a moment of purity: when you see your own
          refection on the water's rippled surface.
        </TextBlock>
        <Divider />
        <TextBlock header="Stone bottle cap">
          The stone bottle cap ensures sustainable use, evokes a sense of
          harmony, and gives the feeling of being alone in the middle of nature
          — totally balanced, just still water and you.
        </TextBlock>
        <Divider />
        <TextBlock header="Sustainable details">
          When water, glass, and stone come together, we only need one
          additional detail: a tamper-evident sticker to ensure your water is
          untouched. The sticker on the bottle is made of tyvek paper, so the
          whole bottle is recyclable and environmentally friendly.
        </TextBlock>
        <ImgComponent link={productImg2} altText="water" banner={false} />
        <div className="product-section">
          <div className="product-info-block">
            <span
              className="product-info-item bold"
              style={{
                fontSize: 20,
              }}
            >
              pH water
            </span>
            <span
              className="product-info-item gray"
              style={{
                fontSize: 20,
              }}
            >
              0.3/0.7/1L
            </span>
          </div>
          <Button height={50} fontSize={20} width="40vw">
            More info
          </Button>
        </div>
        <ImgComponent link={logo} altText="logo" banner={false} />
        <Composition />
      </main>
    </>
  );
}
