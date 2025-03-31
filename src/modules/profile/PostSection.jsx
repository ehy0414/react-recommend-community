"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryList from "../category/components/CategoryList";
import api from "../../services/axios";

const PostsSection = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("desc");
    const [userId, setUserId] = useState("");
    const pageSize = 6;

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);
    
    useEffect(() => {
        if (userId) {
            getUserData();
        }
    }, [userId, currentPage]);
    
    const getUserData = async () => {
        try {
            const seasons = ["spring", "summer", "autumn", "winter"];
            const requests = seasons.map((season) => api.get(`/${season}?userId=${userId}`));
            const responses = await Promise.all(requests);
            
            const allUserData = responses.flatMap((res) => res.data);
            setUserPosts(allUserData);
        } catch (err) {
            console.error("데이터 가져오기 실패:", err);
        }
    };

    useEffect(() => {
      window.scrollTo(0, 0);
      setUserPosts([]); // 페이지가 변경될 때 기존 데이터를 초기화
    }, [currentPage]);
  
    const sortedUserPosts = [...userPosts].sort((a, b) =>
      sortOrder === "desc" ? b.id - a.id : a.id - b.id
    );
  
    const currentData = sortedUserPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.ceil(sortedUserPosts.length / pageSize);

  return (
    <section>
        <TabsContainer>
            <Tab>작성한 게시글</Tab>
        </TabsContainer>

        {currentData.length > 0 ? (
            <CategoryList data={currentData} />
        ) : (
            <Message>게시글이 등록되지 않았어요.</Message>
        )}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
                {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    style={{
                    margin: "0 5px",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    border: "1px solid #555",
                    borderRadius: "4px",
                    backgroundColor: currentPage === index + 1 ? "#555" : "#fff",
                    color: currentPage === index + 1 ? "#fff" : "#000",
                    }}
                >
                    {index + 1}
                </button>
                ))}
            </div>

    </section>
  );
};

const TabsContainer = styled.nav`
  display: flex;
  justify-content: center;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
`;

const Tab = styled.button`
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #8e8e8e;
  letter-spacing: 1px;
  background: none;
  border: none;
`;

// 빈 게시글 메시지 스타일
const Message = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "Gamja Flower";
  color: #555;
  margin-top: 40px;
  margin-bottom: 20%;
`;

export default PostsSection;
