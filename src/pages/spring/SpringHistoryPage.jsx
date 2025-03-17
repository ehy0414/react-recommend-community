"use client";
import styled from "styled-components";
import HistorySelector from "../../modules/springPage/history/HistorySelector";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function SpringHistoryPage() {

  return (
    <Wrapper>
      <HistorySelector />
    </Wrapper>

  );
}

export default SpringHistoryPage;
