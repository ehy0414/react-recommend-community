import React from "react";
import AutumnCard from "./AutumnCard";

const AutumnList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((autumn) => (
        <AutumnCard
          key={autumn.id}
          title={autumn.title}
          content={autumn.content}
          image={autumn.image}
          autumnId={autumn.id}
        />
      ))}
    </div>
  );
};

export default AutumnList;
