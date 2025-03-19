import styled from "styled-components";
import CreatePost from "../../modules/springPage/components/CreatePost";
import BreakTitle from "../../modules/springPage/break/BreakTitle";

const SpringWritePage = () => {
    const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    `;

    return(
        <Wrapper>
            <BreakTitle />
            <CreatePost />
        </Wrapper>
    )
}

export default SpringWritePage;