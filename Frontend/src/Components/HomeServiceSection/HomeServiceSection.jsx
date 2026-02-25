import React from "react";
import "./WeddingServicesSection.css";

import {
  FiClipboard,
  FiSmile,
  FiShoppingBag,
  FiCoffee
} from "react-icons/fi";

/* decorative */
import leafLeft from "../../assets/leaf-left.webp";
import leafRight from "../../assets/leaf-right.webp";
import cardLeaf from "../../assets/card-leaf.webp";
import decoFlower from "../../assets/TwinFlower-1.webp";
import sideImg from "../../assets/service-side.webp";

const services = [
  {
    icon: <FiClipboard />,
    title: "Wedding Planners",
    text: "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect."
  },
  {
    icon: <FiSmile />,
    title: "Kids Party",
    text: "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect."
  },
  {
    icon: <FiShoppingBag />,
    title: "Bridal Shower",
    text: "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect."
  },
  {
    icon: <FiCoffee />,
    title: "Rehearsal Dinner",
    text: "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect."
  }
];

const WeddingServicesSection = () => {
  return (
    <section className="wServices">

      {/* floating leaves */}
      <img src={leafLeft} className="wServices__leaf wServices__leaf--left" />
      <img src={leafRight} className="wServices__leaf wServices__leaf--right" />

      <div className="wServices__header">
        <p className="wServices__label">WEDDING SERVICES FOR YOU</p>
        <h2 className="wServices__title">
          We Design Your Special Day <br /> & Event Plans
        </h2>

        <img src={decoFlower} className="wServices__flower" />
      </div>

      {/* grid */}
      <div className="wServices__grid">

        {/* left image */}
        <div className="wServices__sideImage">
          <img src={sideImg} />
        </div>

        {services.map((s, i) => (
          <div key={i} className="wServices__card">

            {/* bg leaf inside card */}
            <img src={cardLeaf} className="wServices__cardLeaf" />

            <div className="wServices__iconWrap">
              {s.icon}
            </div>

            <h3 className="wServices__cardTitle">{s.title}</h3>
            <p className="wServices__cardText">{s.text}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WeddingServicesSection;