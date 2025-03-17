"use client";
import styled from "styled-components";
import skillImg from "../../assets/skillBack.png";
import historyImg from "../../assets/back.webp";
import CardComponent from "../../../components/layout/card/CardComponent";

const CardDisplay = () => {
  return (
    <Container>
      <SeasonGrid>
        <CardComponent
          image={skillImg}
          title="기술스택"
          delay="0s" /* 첫 번째 카드 */
          content1="웹 프론트엔드 개발 : React.js"
          content2="웹 디자인 : figma.com"
          content3="벤치마킹 : SPC"
        />
        <CardComponent
          image={historyImg}
          title="기획의도"
          delay="0.3s" /* 세 번째 카드 */
          content1="기획의도"
          content2="사람들이 계절마다 가고 싶은 여행지를 서로 공유하고"
          content3="소통하는 커뮤니티 사이트를 만들고자 했습니다."
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
  grid-template-columns: 1fr 1fr; /* 1:1 비율 */
  width: 100%;
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr; /* 작은 화면에서는 세로 정렬 */
  }
`;

export default CardDisplay;
