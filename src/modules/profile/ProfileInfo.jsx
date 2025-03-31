"use client";
import React from "react";
import styled from "styled-components";
import img from "../assets/history.jpg";

const ProfileInfo = ({userName}) => {
  return (
    <ProfileContainer>
      <ProfileAvatar src={img} alt="avatar"/>
      <ProfileDetails>
        <ProfileHeader>
          <ProfileName>{userName}님</ProfileName>
          <FollowButton>프로필 변경하기</FollowButton>
        </ProfileHeader>
      </ProfileDetails>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.section`
    display: flex;
    gap: 80px;
    margin-bottom: 44px;
    margin-left: 20%;
    @media (max-width: 991px) {
        gap: 40px;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        gap: 20px;
        align-items: center;
        text-align: center;
    }
`;

const ProfileAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #262626;
    @media (max-width: 991px) {
        width: 120px;
        height: 120px;
    }
    @media (max-width: 640px) {
        width: 100px;
        height: 100px;
    }
`;

const ProfileDetails = styled.div`
    margin-top:30px;
    flex: 1;
`;

const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const ProfileName = styled.h2`
    font-size: 25px;
    font-family: "Gamja Flower";
    font-weight: bold;
`;

const FollowButton = styled.button`
    background-color:rgb(252, 204, 133);
    color: white;
    padding: 7px 16px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 20px;
    font-family: "Gamja Flower";
    cursor: pointer;
    border: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #ff7f50;
    }
        
    &::after {
        background-color: #ff7f50;
        transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }
`;


export default ProfileInfo;
