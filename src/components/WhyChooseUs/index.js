import React from "react";
import "./index.css"; // Import CSS file for styling
import LearnInfoComponent from "../LearnInfoComponent";

const WhyChooseUs = () => {
  const cardData = [
    {
      logo: "https://img.freepik.com/free-vector/gradient-family-symbol_23-2149268692.jpg?w=740&t=st=1712491658~exp=1712492258~hmac=1559fca3b2902d292f6826fed7cd8758b3d3f00853d3ee5f74aa336f435050a4",
      heading: "Expert Faculty",
      description: "We provide top-notch service with attention to detail.",
    },
    {
      logo: "https://img.freepik.com/free-vector/gradient-family-symbol_23-2149268692.jpg?w=740&t=st=1712491658~exp=1712492258~hmac=1559fca3b2902d292f6826fed7cd8758b3d3f00853d3ee5f74aa336f435050a4",
      heading: "Placements",
      description: "Our team consists of experienced professionals.",
    },
    {
      logo: "https://img.freepik.com/free-vector/gradient-family-symbol_23-2149268692.jpg?w=740&t=st=1712491658~exp=1712492258~hmac=1559fca3b2902d292f6826fed7cd8758b3d3f00853d3ee5f74aa336f435050a4",
      heading: "Complete success package",
      description: "We prioritize customer satisfaction above all else.",
    },
  ];
  const smallCardData = [
    {
      heading: "Levels",
      subheading: "12 LEVELS",
    },
    {
      heading: "Duration",
      subheading: "12-16 weeks",
    },
    {
      heading: "Exams",
      subheading: " Quarterly[4months]",
    },
    {
      heading: "Exemptions",
      subheading: "upto 9 years",
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.logo} alt="Logo" />
            <h3>{card.heading}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="small-card-container">
        {smallCardData.map((smallCard, index) => (
          <div key={index} className="small-card">
            <h3>{smallCard.heading}</h3>
            <p>{smallCard.subheading}</p>
          </div>
        ))}
      </div>
      <LearnInfoComponent />
    </div>
  );
};

export default WhyChooseUs;
