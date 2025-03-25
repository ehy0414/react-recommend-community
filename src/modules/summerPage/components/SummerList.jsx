import React from "react";
import SummerCard from "./SummerCard";

const SummerList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((summer) => (
        <SummerCard
          key={summer.id}
          title={summer.title}
          content={summer.content}
          image={summer.image}
          summerId={summer.id}
        />
      ))}
    </div>
  );
};

export default SummerList;
