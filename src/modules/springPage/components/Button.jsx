import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ControlsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  margin-left: 79%;
  width: 120px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CareersButton = styled.button`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  margin-top:10px;
  padding: 14px 35px;
  align-items: center;
  text-align: center;
  font-family: 'Gamja Flower';
  font-size: 17px;
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

export function Button() {
  const navigate = useNavigate();
  return (
    <ControlsWrapper onClick={() => {navigate("/spring/write")}}>
          <CareersButton>
            글쓰기
          </CareersButton>
    </ControlsWrapper>
  );
}
