"use client";
import styled from "styled-components";
import SeasonCard from "./components/SeasonCard";
import natureImg from "../assets/nature.jpg";
import breakImg from "../assets/break.jpg";
import historyImg from "../assets/history.jpg";

const SeasonalDisplay = () => {
  return (
    <Container>
      <SeasonGrid>
        <SeasonCard
          image={natureImg}
          title="자연"
          delay="0s" /* 첫 번째 카드 */
        />
        <SeasonCard
          image={breakImg}
          title="휴식"
          delay="0.3s" /* 두 번째 카드 */
        />
        <SeasonCard
          image={historyImg}
          title="역사"
          delay="0.6s" /* 세 번째 카드 */
        />
      </SeasonGrid>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  padding-top: 20px;
  transform: translate(3%);
  flex-direction: column;
  align-items: flex-start;
  width: 94%;
`;

const SeasonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 비율 */
  width: 100%;
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr; /* 작은 화면에서는 세로 정렬 */
  }
`;

export default SeasonalDisplay;
