import React from "react";
import WinterCard from "./WinterCard";

const WinterList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((winter) => (
        <WinterCard
          key={winter.id}
          title={winter.title}
          content={winter.content}
          image={winter.image}
          winterId={winter.id}
        />
      ))}
    </div>
  );
};

export default WinterList;
