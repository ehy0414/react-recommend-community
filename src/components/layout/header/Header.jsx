"use client";
import * as React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { HeaderControls } from "./HeaderControls";

const HeaderContainer = styled.header`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  display: flex;
  min-height: 105px;
  width: 100%;
  
  @media (max-width: 991px) {
    max-width: 100%;

  }
`;


export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <MainNavigation />
      <HeaderControls />
    </HeaderContainer>
  );
}
