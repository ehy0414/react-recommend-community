import styled from "styled-components";
import InputDesign from "../modules/join/InputDesign";

const Wrapper = styled.div`
    width:80%;
    height:100%;
`;

const JoinPage = () => {

    return(
        <Wrapper>
            <InputDesign />
        </Wrapper>
    );
}

export default JoinPage;