import React from "react";
import FormComponent from "../FormComponent";
import "./index.css";

const bannerCards = [
  { name: "registration", value: 1200000 },
  { name: "joined", value: 1200000 },
  { name: "learning hours", value: 1200000 },
  { name: "students", value: 1200000 },
];

const Banner = () => (
  <div className="banner-container">
    <div className="left-side">
      <h1>Become ACCA in 18 months</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sint
        magnam qui similique quibusdam placeat labore doloribus cumque hic
        perspiciatis.
      </p>
      <div className="left-side-cards-container">
        {bannerCards.map((each) => (
          <div className="left-side-card" key={each.name}>
            <h2>{each.name}</h2>
            <p>{each.value}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="blue-btn">Download Brochure</button>
        <button className="red-btn">Download Brochure</button>
      </div>
    </div>
    <FormComponent />
  </div>
);
export default Banner;
