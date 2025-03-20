import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  align-self: stretch;
  min-width: 240px;
  margin: auto 0;
  font-family:
    Rubik,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  color: #000;
  font-weight: 600;
  text-align: center;
  line-height: 105px;
  width: 1023px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NavItems = styled.nav`
  display: flex;
  width: 800px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NavItem = styled.a`
  align-self: stretch;
  margin: auto 0;
  flex: 1;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  font-family: "Gamja Flower";
  font-size: 30px;
  position: relative;
  padding: 0 10px;
  transition: all 0.3s ease-in-out;

  /* 기본 상태에서 가볍게 강조 */
  &:hover {
    color: #ff7f50; /* 코랄 색으로 변경 */
  }

  /* 아래 밑줄 애니메이션 효과 */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 25px;
    width: 0;
    height: 3px;
    background-color: #ff7f50; /* 밑줄 색 */
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
    white-space: initial;
  }
`;


export function MainNavigation() {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavItems>
        <NavItem onClick={() => navigate("/aboutUs")}>ABOUT US</NavItem>
        <NavItem onClick={() => navigate("/spring/nature")}>SPRING</NavItem>
        <NavItem onClick={() => navigate("/aboutUs")}>SUMMER</NavItem>
        <NavItem onClick={() => navigate("/aboutUs")}>AUTUMN</NavItem>
        <NavItem onClick={() => navigate("/aboutUs")}>WINTER</NavItem>
        <NavItem onClick={() => navigate("/aboutUs")}>SUPPORT</NavItem>
      </NavItems>
    </NavContainer>
  );
}
