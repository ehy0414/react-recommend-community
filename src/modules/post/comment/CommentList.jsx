import styled from "styled-components";
import CommentItem from "./CommentItem";

const CommentList = ({data}) => {
    return (
        <Wrapper>
            <CommentLists>
                {data.map((comment, index) => (
                    <CommentItem    key={index}
                                    userName={comment.userName}
                                    userComment={comment.content} />
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