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
const SpringPostPage = () => {
    const { id } = useParams();
    const [getSpring, setSpring] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        getPost();
    }, [id]);
    
    useEffect(() => {
        if (getSpring.userId) { // ✅ userId가 존재할 때만 실행
            getUser();
        }
    }, [getSpring]); // ✅ getSpring이 변경될 때 실행
    
    const getPost = async () => {
        try {
            const response = await api.get(`spring/${id}`);
            setSpring(response.data);
            console.log(response.data);
        } catch (error) {
            alert("에러가 발생하였습니다");
        }
    };
    
    const getUser = async () => {
        try {
            const response = await api.get(`/users?id=${getSpring.userId}`);
            console.log(response.data);
        } catch (error) {
            alert("에러가 발생하였습니다");
        }
    };
    

    return(
        <Wrapper>
            <HeaderTitle title="SPRING"/>
            <ImageContainer image={getSpring.image}/>
            <ContentSection data={getSpring}/>
            <CommentInput data={getSpring}/>
            <Footer/>
        </Wrapper>
    );
}

export default SpringPostPage;