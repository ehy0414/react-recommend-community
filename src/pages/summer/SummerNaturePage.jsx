"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import api from "../../services/axios";
import Footer from "../../components/layout/footer/Footer";
import NatureSelector from "../../modules/category/nature/NatureSelector";
import SummerList from "../../modules/summerPage/components/SummerList";
import { Button } from "../../modules/summerPage/components/Button";

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

function SummerNaturePage() {
  const [summerNature, setSummerNature] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" (최신순)이 기본값
  const pageSize = 12;  // 한 페이지에 표시될 항목 수

  // json-server에서 데이터 가져오기 및 category "nature" 필터링
  const getNature = async () => {
    try {
      const response = await api.get("/summer");
      const natureData = response.data.filter((item) => item.category === "nature");
      setSummerNature(natureData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNature();
  }, []);

  // 페이지 이동 시 화면 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // 정렬: 최신순(내림차순) 또는 오래된 순(오름차순)
  const sortedSummerNature = [...summerNature].sort((a, b) => 
    sortOrder === "desc" ? b.id - a.id : a.id - b.id
  );

  // 현재 페이지에 해당하는 데이터
  const currentData = sortedSummerNature.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(sortedSummerNature.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <NatureSelector season="SUMMER"/>
      {/* 정렬 선택 UI */}
      <SortSelect
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          setCurrentPage(1); // 정렬 순서 변경 시 페이지 1로 초기화
          window.scrollTo(0, 0); // 스크롤 상단 이동
        }}
      >
        <SelectOption value="desc">최신순</SelectOption>
        <SelectOption value="asc">오래된 순</SelectOption>
      </SortSelect>

      {/* 글쓰기 버튼 */}
      <Button />


      {/* 게시글 리스트 또는 빈 게시글 메시지 출력 */}
      {currentData.length > 0 ? (
        <SummerList data={currentData} />
      ) : (
        <Message>게시글이 등록되지 않았어요.</Message>
      )}

      {/* 페이지 네비게이션 */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
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

export default SummerNaturePage;
