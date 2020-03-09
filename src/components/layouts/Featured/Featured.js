import React, { useState } from "react";
import "./Featured.css";
import CardFeatured from "./Card/CardFeatured";
import testImg from "../../../service-img.jpg";

function Featured() {
  const [feat, setFeat] = useState([
    {
      owner: "owner1",
      name: "test1",
      desc:
        "Velit, veritatis. Praesentium, iusto recusandae doloribus a sit quibusdam. Maiores ab qui aspernatur atque ex, quidem molestias velit repellendus?",
      categ: "categ1",
      img: testImg
    },
    {
      owner: "owner2",
      name: "test2",
      desc:
        "Velit, veritatis. Praesentium, iusto recusandae doloribus a sit quibusdam. Maiores ab qui aspernatur atque ex, quidem molestias velit repellendus?",
      categ: "categ2",
      img: testImg
    },
    {
      owner: "owner3",
      name: "test3",
      desc:
        "Velit, veritatis. Praesentium, iusto recusandae doloribus a sit quibusdam. Maiores ab qui aspernatur atque ex, quidem molestias velit repellendus?",
      categ: "categ3",
      img: testImg
    },
    {
      owner: "owner4",
      name: "test4",
      desc:
        "Velit, veritatis. Praesentium, iusto recusandae doloribus a sit quibusdam. Maiores ab qui aspernatur atque ex, quidem molestias velit repellendus?",
      categ: "categ4",
      img: testImg
    },
    {
      owner: "owner5",
      name: "test5",
      desc:
        "Velit, veritatis. Praesentium, iusto recusandae doloribus a sit quibusdam. Maiores ab qui aspernatur atque ex, quidem molestias velit repellendus?",
      categ: "categ5",
      img: testImg
    },
    {
      owner: "owner6",
      name: "test6",
      desc:
        "Velit, veritatis. Praesentium, iusto recusandae doloribus a sit quibusdam. Maiores ab qui aspernatur atque ex, quidem molestias velit repellendus?",
      categ: "categ6",
      img: testImg
    }
  ]);
  return (
    <div className="container">
      <h1 className=" section-featured">Featured Services</h1>
      <div className="row">
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardFeatured data={feat[0]} />
        </div>
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardFeatured data={feat[1]} />
        </div>
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardFeatured data={feat[2]} />
        </div>
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardFeatured data={feat[3]} />
        </div>
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardFeatured data={feat[4]} />
        </div>
        <div
          className="col"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardFeatured data={feat[5]} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
