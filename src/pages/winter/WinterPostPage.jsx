import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../services/axios";
import Footer from "../../components/layout/footer/Footer";
import ImageContainer from "../../modules/post/ImageContainer";
import ContentSection from "../../modules/post/ContentSection";
import HeaderTitle from "../../modules/post/HeaderTitle";
import CommentInput from "../../modules/post/comment/CommentInput";


const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    `;
const WinterPostPage = () => {
    const { id } = useParams();
    const [getWinter, setWinter] = useState([]);
    const getPost = async() => {
        try {
            const response = await api.get(`winter/${id}`);
            setWinter(response.data);
            console.log(response.data);
        } catch (error) {
            alert("에러가 발생하였습니다");
        }

    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getPost();
    },[id]);

    return(
        <Wrapper>
            <HeaderTitle title="WINTER"/>
            <ImageContainer image={getWinter.image}/>
            <ContentSection data={getWinter}/>
            <CommentInput data={getWinter}/>
            <Footer/>
        </Wrapper>
    );
}

export default WinterPostPage;