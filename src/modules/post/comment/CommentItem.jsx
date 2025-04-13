import styled from "styled-components";

const CommentItem = ({userName, userComment}) => {

    return (
        <Wrapper>
            <CommentItems>
                <strong>{userName}</strong>: {userComment}
            </CommentItems>
        </Wrapper>        
    )
}

// 전체 Wrapper
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CommentItems = styled.li`
  margin-bottom: 10px;
  font-family: "Gamja Flower";
  font-size: 18px;
`;

export default CommentItem;