import styled from "styled-components";

const ControlsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 200px;
  margin: auto 0;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  width: 480px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ControlsContainer = styled.div`
    
`;

const ControlsList = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const CareersButton = styled.button`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  min-height: 66px;
  padding: 18px 15px;
  align-items: center;
  font-family:
    Rubik,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1;
  justify-content: start;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    transform: scale(1.1); /* 호버 시 크기 확대 */
  }
`;

const CareersText = styled.span`
  border-radius: 50px;
  background-color: rgba(234, 234, 234, 1);
  align-self: stretch;
  margin: auto 0;
  padding: 5px 10px;
  font-family: 'Gamja Flower';
  font-size: 17px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export function HeaderControls() {
  return (
    <ControlsWrapper>
      <ControlsContainer>
        <ControlsList>
          <CareersButton>
            <CareersText>로그인</CareersText>
          </CareersButton>
          <CareersButton>
            <CareersText>회원가입</CareersText>
          </CareersButton>
        </ControlsList>
      </ControlsContainer>
    </ControlsWrapper>
  );
}
