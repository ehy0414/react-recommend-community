import React from "react";
import SpringCard from "./SpringCard";

const SpringList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((spring) => (
        <SpringCard
          key={spring.id}
          title={spring.title}
          content={spring.content}
          image={spring.image}
        />
      ))}
    </div>
  );
};

export default SpringList;
