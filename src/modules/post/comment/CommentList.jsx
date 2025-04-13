import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useEffect, useState } from "react";

const CommentList = ({data}) => {
    const [userId, setUserId] = useState(null);

    useEffect(()=> {
        setUserId(localStorage.getItem("userId"));
    },[]);

    return (
        <Wrapper>
            <CommentLists>
                {data.map((comment, index) => (
                    <CommentItem    key={index}
                                    commentId={comment.id}
                                    userName={comment.userName}
                                    userComment={comment.content}
                                    commentUserId={comment.userId}
                                    userId={userId} />
                ))}
            </CommentLists>
        </Wrapper>
    );
}


// 전체 Wrapper
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 11%;
`;

const CommentLists = styled.ul`
  margin-top: 20px;
  padding: 0 20px;
  list-style: none;
`;

export default CommentList;