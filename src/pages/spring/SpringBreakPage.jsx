"use client";
import styled from "styled-components";
import BreakSelector from "../../modules/springPage/break/BreakSelector";
import { useEffect, useState } from "react";
import api from "../../services/axios";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function SpringBreakPage() {
    const [springBreak, setSpringBreak] = useState("");

    // json-server version
    const getBreak = async() => {
        try {
            const response = await api.get("/spring");
            setSpringBreak(response.data);
            console.log("debug >> axios get OK!! ", response.data);
        } catch(err) {
            console.log( err );
        }
    }

    useEffect( () => {
        getBreak();
    }, [] );

  return (
    <Wrapper>
      <BreakSelector />
    </Wrapper>

  );
}

export default SpringBreakPage;
