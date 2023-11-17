import React from 'react';
import styled from "styled-components";

type StyledMySkillPropsType = {
    textSkill: string
    textPercentSkill:string
}

export const MySkill = (props: StyledMySkillPropsType) => {
    return (
        <StyledMySkill>
            <PercentSkill>
                <TextSkill>
                    {props.textSkill}
                </TextSkill>
                <TextPercentSkill>
                    {props.textPercentSkill}
                </TextPercentSkill>
            </PercentSkill>
        </StyledMySkill>
    );
};

const StyledMySkill = styled.div `
  width: 531px;
  border-bottom: 4px solid #F0F0F0;
  margin-left: 55px;
`
const PercentSkill = styled.div `
  width: calc(531px - );
  border-bottom: 4px solid #282828;
  position: relative;
  top: 4px;
  padding-bottom: 11px;
`
const TextSkill = styled.span `
  color: #111;
  font-family: Manrope;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.57px;
  text-transform: capitalize;
`
const TextPercentSkill = styled.span `
  color: #111;
  font-family: Manrope;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.57px;
`

