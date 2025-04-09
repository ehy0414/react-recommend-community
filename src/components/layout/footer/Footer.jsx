import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>스마트미디어학과 202062033 엄현용</p>
        <FooterLinks>
          <a href="https://github.com/ehy0414/react-recommend-community.git">GitHub Link</a> | <a href="#">Terms of Service</a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color:rgb(236, 236, 236);
  color: black;
  padding: 20px 0;
  margin-top: 40px;
  position: relative;
  bottom: 0;
  
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  margin-top: 10px;

  a {
    color: black;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
