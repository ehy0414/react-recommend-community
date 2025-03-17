import styled from "styled-components";

const Title = styled.h1`
  width: 100%;
  padding-right: 769px;
  font-size: 48px;
  font-family: "Gamja Flower";
  color: #000;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 991px) {
    font-size: 40px;
    max-width: 100%;
    padding: 0 20px;
  }
`;

const HeaderTitle = () => {
  return <Title>ABOUT US</Title>;
};

export default HeaderTitle;
