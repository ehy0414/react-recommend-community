"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import api from "../../services/axios";
import Footer from "../../components/layout/footer/Footer";
import HeaderTitle from "../../modules/post/HeaderTitle";
import CategoryList from "../../modules/category/components/CategoryList";

// 전체 Wrapper
const Wrapper = styled.div`  
    position: absolute;
    width: 100%;
    height: 100%;
`;

// 정렬 선택을 위한 스타일드 셀렉트
const SortSelect = styled.select`
  margin-top: 30px;
  margin-left: 702px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-family: "Gamja Flower";
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid lightgray;
  cursor: pointer;
`;

const SelectOption = styled.option`
  text-align: center;
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

function BreakPage() {
    const [breakPosts, setBreakPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("desc");
    const pageSize = 12;  
  
    // ✅ 모든 계절의 break 카테고리 가져오기
    const getBreakData = async () => {
      try {
        const seasons = ["spring", "summer", "autumn", "winter"];
        const requests = seasons.map((season) => api.get(`/${season}`));
        
        const responses = await Promise.all(requests);
        const allBreakData = responses.flatMap((res) =>
          res.data.filter((item) => item.category === "break")
        );
  
        setBreakPosts(allBreakData);
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
      }
    };
  
    useEffect(() => {
      getBreakData();
    }, []);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currentPage]);
  
    const sortedBreakPosts = [...breakPosts].sort((a, b) =>
      sortOrder === "desc" ? b.id - a.id : a.id - b.id
    );
  
    const currentData = sortedBreakPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.ceil(sortedBreakPosts.length / pageSize);
  
    return (
      <Wrapper>
        <HeaderTitle title="휴식"/>
        <SortSelect value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <SelectOption value="desc">최신순</SelectOption>
          <SelectOption value="asc">오래된 순</SelectOption>
        </SortSelect>
  
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
        <Footer />
      </Wrapper>
    );
  }
  

export default BreakPage;