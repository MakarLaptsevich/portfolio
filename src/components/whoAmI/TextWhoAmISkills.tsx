import React from 'react';
import styled from "styled-components";

type StyledTextWhoAmISkillsPropsType = {
    text: string
}
export const TextWhoAmISkills = (props: StyledTextWhoAmISkillsPropsType) => {
    return (
        <StyledTextWhoAmISkills>
            <Text>
                {props.text}
            </Text>
        </StyledTextWhoAmISkills>
    );
};

const StyledTextWhoAmISkills = styled.div `
  padding-bottom: 32px;
  margin-left: 55px;
`
const Text = styled.h3 `
  color: #282828;
  font-family: Manrope;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 225.023%; /* 42.754px */
  letter-spacing: 0.38px;
`

