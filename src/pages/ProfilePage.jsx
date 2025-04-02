import styled from "styled-components";
import HeaderTitle from "../modules/post/HeaderTitle";
import ProfileInfo from "../modules/profile/ProfileInfo";
import PostsSection from "../modules/profile/PostSection";
import { useEffect, useState } from "react";
import Footer from "../components/layout/footer/Footer";

const Wrapper = styled.div`
    position: absolute;
    width:100%;
    height:100%;
`;

const MainContent = styled.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px;
`;



export function ProfilePage() {
    const [userName, setUserName] = useState("");

    useEffect(()=>{
        const getUserName = localStorage.getItem("userName");
        setUserName(getUserName);
    })

    return(
        <Wrapper>
            <HeaderTitle title="마이페이지" />
            <MainContent>
                <ProfileInfo userName={userName}/>
                <PostsSection />
            </MainContent>     
            <Footer />
        </Wrapper>
    );
};