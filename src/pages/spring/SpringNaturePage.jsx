"use client";
import styled from "styled-components";
import NatureSelector from "../../modules/springPage/nature/NatureSelector";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function SpringNaturePage() {

  return (
    <Wrapper>
      <NatureSelector />
    </Wrapper>

  );
}

export default SpringNaturePage;
