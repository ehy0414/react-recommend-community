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
          season={nature.season}  // ✅ 각 게시글의 계절 정보 전달
        />
      ))}
    </div>
  );
};

export default NatureList;
