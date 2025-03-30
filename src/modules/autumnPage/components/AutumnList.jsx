import React from "react";
import AutumnCard from "./AutumnCard";

const AutumnList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((spring) => (
        <AutumnCard
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

export default AutumnList;
