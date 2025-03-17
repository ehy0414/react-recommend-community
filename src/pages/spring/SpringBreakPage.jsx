"use client";
import styled from "styled-components";
import BreakSelector from "../../modules/springPage/break/BreakSelector";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function SpringBreakPage() {

  return (
    <Wrapper>
      <BreakSelector />
    </Wrapper>

  );
}

export default SpringBreakPage;
