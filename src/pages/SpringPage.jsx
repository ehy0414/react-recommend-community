"use client";
import styled from "styled-components";
import CategorySelector from "../modules/springPage/CategorySelector";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function SpringPage() {

  return (
    <Wrapper>
      <CategorySelector />
    </Wrapper>

  );
}

export default SpringPage;
