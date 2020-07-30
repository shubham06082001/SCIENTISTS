import React from "react";
import "./Card.css";

const Card = ({ name, year, img, description, discoveries }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-body">
          <div className="card-front tc grow bg-light-green">
            <img src={img} alt="scientist" />
            <h2 className="f2">{name}</h2>
            <p>{year} &nbsp;-- {discoveries}</p>
          </div>
          <p className="card-back bg-gold tc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
