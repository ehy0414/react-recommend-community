import styled from "styled-components";
import HeaderTitle from "../modules/post/HeaderTitle";
import Footer from "../components/layout/footer/Footer";
import EditPost from "../modules/post/EditPost";
import { useEffect, useState } from "react";
import api from "../services/axios";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const EditPostPage = () => {
    const [season, setSeason] = useState([]);

    const params = useParams(); 
    //console.log(params);

    const getSeason = async () => {
        try {
            const seasons = ["spring", "summer", "autumn", "winter"];
            const requests = seasons.map((season) => api.get(`/${season}?id=${params.id}`));
    
            const responses = await Promise.all(requests);
            const seasonData = responses
                .map(response => response.data) // 응답에서 data만 추출
                .filter(data => Object.keys(data).length > 0) // 빈 객체가 아닌 것만 필터링
                .flat(); // 2중 배열을 1중 배열로 평탄화
            setSeason(seasonData);
        } catch (err) {
            console.error("데이터 가져오기 실패:", err);
        }
    };
    
    useEffect(() => {
        getSeason();
    },[])

    // console.log(season[0]);

    return (
        <Wrapper>
            <HeaderTitle title="수정하기"/>
            <EditPost data={season[0]}/>
            <Footer />
        </Wrapper>
    );
}

export default EditPostPage;