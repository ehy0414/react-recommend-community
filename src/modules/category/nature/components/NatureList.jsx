import React from "react";
import NatureCard from "./NatureCard";

const NatureList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((nature) => (
        <NatureCard
          key={nature.id}
          title={nature.title}
          content={nature.content}
          image={nature.image}
          natureId={nature.id}
        />
      ))}
    </div>
  );
};

export default NatureList;
