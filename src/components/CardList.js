import React from "react";
import Card from "./Card";

const CardList = ({ scientists }) => {
  const cardComponent = scientists.map((user, i) => {
    return (
      <Card
        key={scientists[i].id}
        id={scientists[i].id}
        name={scientists[i].name}
        discoveries={scientists[i].discoveries}
        img={scientists[i].img}
        description={scientists[i].description}
        year={scientists[i].year}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
