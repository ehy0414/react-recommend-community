import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  width: 40px;
  cursor: pointer;
`;

export function Logo() {
  const navigate = useNavigate();
  return (
    <LogoWrapper>
      <LogoImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d4dc7a1b2a005f35d9a87c7f0465a8b6a70291b01caf763fd95a2d1365606?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c"
        alt="Company Logo"
        onClick={() => {navigate("/")}}
      />
    </LogoWrapper>
  );
}
