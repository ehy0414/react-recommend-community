import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          content={category.content}
          image={category.image}
          categoryId={category.id}
          season={category.season}  // ✅ 각 게시글의 계절 정보 전달
        />
      ))}
    </div>
  );
};

export default CategoryList;
