import styled from "styled-components";
import InputDesign from "../modules/join/InputDesign";
import HeaderTitle from "../modules/post/HeaderTitle";

const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

const JoinPage = () => {

    return(
        <Wrapper>
            <HeaderTitle title="회원가입" />
            <InputDesign />
        </Wrapper>
    );
}

export default JoinPage;