import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ data, currentUserId }) => {
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
          postUserId={category.userId}  // ✅ 게시글 작성자의 userId 전달
          currentUserId={currentUserId} // ✅ 로그인한 유저 ID 전달
        />
      ))}
    </div>
  );
};

export default CategoryList;
