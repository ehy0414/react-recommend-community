import styled from "styled-components";
import CreatePost from "../../modules/post/CreatePost";
import HeaderTitle from "../../modules/springPage/components/HeaderTitle";
import Footer from "../../components/layout/footer/Footer";
import { useEffect } from "react";

const SummerWritePage = () => {
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
            <HeaderTitle title="SUMMER" />
            <CreatePost season="summer"/>
            <Footer />
        </Wrapper>
    )
}

export default SummerWritePage;