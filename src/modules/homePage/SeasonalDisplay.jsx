"use client";
import styled from "styled-components";
import SeasonCard from "./components/SeasonCard";

const SeasonalDisplay = () => {
  return (
    <Container>
      <SeasonGrid>
        <SeasonCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/d86a44f03395ecaeeaa2f5dd69426666f77ae182"
          title="음악"
          delay="0s" /* 첫 번째 카드 */
        />
        <SeasonCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/2b2409bac2da28c770852125f9b9dc21f1a119e2"
          title="음식"
          delay="0.3s" /* 두 번째 카드 */
        />
        <SeasonCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ea355bfb6b4321e49b6bb8906aa2530ea58d97"
          title="전체"
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
