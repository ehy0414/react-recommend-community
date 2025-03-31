import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo/계절따라 로고.png";

const LogoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 103px;
  margin: auto 0;
  height: 40px;

  padding-left: 60px;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 364px;
`;

const LogoImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 60px;
  cursor: pointer;
`;

export function Logo() {
  const navigate = useNavigate();
  return (
    <LogoWrapper>
      <LogoImage
        src={logo}
        alt="Company Logo"
        onClick={() => {navigate("/")}}
      />
    </LogoWrapper>
  );
}
