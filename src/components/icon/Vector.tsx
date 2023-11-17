import React from 'react';
import {Icon} from "./Icon";
import styled from "styled-components";


export const Vector = () => {
    return (
        <StyledVector>
            <Icon iconId={'vector'} width={'52'} height={'3'} viewBox={"0 0 52 5"}/>
        </StyledVector>
    );
};

const StyledVector = styled.div `
  display: inline;
  margin: 10px auto;
`

