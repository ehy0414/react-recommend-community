"use client";
import styled from "styled-components";
import BreakSelector from "../../modules/springPage/break/BreakSelector";
import { useEffect, useState } from "react";
import api from "../../services/axios";
import SpringList from "../../modules/springPage/components/SpringList";
import NatureSelector from "../../modules/springPage/nature/NatureSelector";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function SpringNaturePage() {
  const [springBreak, setSpringBreak] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;  // 한 페이지에 표시될 항목 수를 12개로 설정

  // json-server version: category가 "break"인 항목만 필터링
  const getBreak = async () => {
    try {
      const response = await api.get("/spring");
      const breakData = response.data.filter((item) => item.category === "nature");
      setSpringBreak(breakData);
      console.log("debug >> axios get OK!! ", breakData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBreak();
  }, []);

  // 페이지 이동 시 화면 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 데이터만 잘라서 전달
  const currentData = springBreak.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(springBreak.length / pageSize);

  return (
    <Wrapper>
      <NatureSelector />
      <SpringList data={currentData} />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
            </button>
            ))}
        </div>
    </Wrapper>
  );
}

export default SpringNaturePage;
