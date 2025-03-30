import React from "react";
import WinterCard from "./WinterCard";

const WinterList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((spring) => (
        <WinterCard
          key={spring.id}
          title={spring.title}
          content={spring.content}
          image={spring.image}
          springId={spring.id}
        />
      ))}
    </div>
  );
};

export default WinterList;
