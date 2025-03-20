import styled from "styled-components";
import CreatePost from "../../modules/springPage/components/CreatePost";
import HeaderTitle from "../../modules/springPage/components/HeaderTitle";
import Footer from "../../components/layout/footer/Footer";

const SpringWritePage = () => {
    const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    `;

    return(
        <Wrapper>
            <HeaderTitle title="SPRING" />
            <CreatePost />
            <Footer />
        </Wrapper>
    )
}

export default SpringWritePage;