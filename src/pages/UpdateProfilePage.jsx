import styled from "styled-components";
import { useEffect } from "react";
import HeaderTitle from "../modules/post/HeaderTitle";
import Footer from "../components/layout/footer/Footer";
import UpdateProfile from "../modules/profile/UpdateProfile";

const UpdateProfilePage = () => {
    const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    `;

    useEffect(()=> {
        window.scrollTo(0,0);
    })

    return(
        <Wrapper>
            <HeaderTitle title="이름 변경" />
            <UpdateProfile />
            <Footer />
        </Wrapper>
    )
}

export default UpdateProfilePage;