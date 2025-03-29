import styled from "styled-components";
import HeaderTitle from "../modules/post/HeaderTitle";
import InputDesign from "../modules/login/InputDesign";

const Wrapper = styled.div`
    width:100%;
    height:100%;
`;

const LoginPage = () => {

    return(
        <Wrapper>
            <HeaderTitle title="로그인" />
            <InputDesign />
        </Wrapper>
    );
}

export default LoginPage;