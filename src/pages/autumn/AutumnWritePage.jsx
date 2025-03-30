import styled from "styled-components";

import Footer from "../../components/layout/footer/Footer";
import { useEffect } from "react";
import CreatePost from "../../modules/post/CreatePost";
import HeaderTitle from "../../modules/post/HeaderTitle";

const AutumnWritePage = () => {
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
            <HeaderTitle title="AUTUMN" />
            <CreatePost season="autumn"/>
            <Footer />
        </Wrapper>
    )
}

export default AutumnWritePage;