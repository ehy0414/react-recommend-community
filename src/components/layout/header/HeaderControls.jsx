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
  margin-left:10px;
  padding: 10px 10px;
  align-items: center;
  font-family: 'Gamja Flower';
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  line-height: 1;
  justify-content: start;
  border: none;
  cursor: pointer;
  color:gray;
  border-radius: 50px;
  background-color: rgba(234, 234, 234, 1);
  
  @media (max-width: 991px) {
    white-space: initial;
  }
  &:hover {
    transform: scale(1.1); /* 호버 시 크기 확대 */
    color: black;
  }
`;

export function HeaderControls() {
  return (
    <ControlsWrapper>
      <ControlsContainer>
        <ControlsList>
          <CareersButton>
            로그인
          </CareersButton>
          <CareersButton>
            회원가입
          </CareersButton>
        </ControlsList>
      </ControlsContainer>
    </ControlsWrapper>
  );
}
