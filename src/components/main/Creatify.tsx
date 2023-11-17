import React from 'react';
import styled from "styled-components";

export const Creatify = () => {
    return (
        <StyledCreatify>
            <CText>C</CText>
            <Text>C reatify.</Text>
        </StyledCreatify>
    );
};

const StyledCreatify = styled.div `
  margin-bottom: 140px;
`
const Text = styled.h3 `
  color: #111;
  font-family: Manrope;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 125.023%; /* 43.758px */
  letter-spacing: -0.7px;
`
const CText = styled.h3 `
  position: absolute;
  left: 153px;
  bottom: 555px;
  color: #E6E6E6;
  font-family: Manrope;
  font-size: 51.53px;
  font-style: normal;
  font-weight: 800;
  line-height: 125.023%; /* 64.424px */
  letter-spacing: -1.031px;
  text-transform: capitalize;
`