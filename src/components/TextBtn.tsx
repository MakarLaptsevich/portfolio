import React from 'react';
import styled from "styled-components";

type TextBtnPropsType = {
    text: string
}
export const TextBtn = (props: TextBtnPropsType) => {
    return (
        <StyledTextBtn>
          <Text>
              {props.text}
          </Text>
        </StyledTextBtn>
    );
};

const StyledTextBtn = styled.div `
  
`
const Text = styled.span `
  color: #FFF;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 234.523%; /* 37.524px */
  letter-spacing: 1.6px;
  text-transform: uppercase;
`