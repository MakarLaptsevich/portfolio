import React from 'react';
import {Vector} from "./icon/Vector";
import styled from "styled-components";
import {Icon} from "./icon/Icon";
import {FlexContainer} from "./FlexContainer";

type VectorTextPropsType = {
    text: string
    description?: string
}
export const VectorText = (props: VectorTextPropsType) => {
    return (
        <StyledVectorText>
            <FlexContainer direction={'column'} gap={'28px'}>
                <div>
                    <StyledVector>
                        <Icon iconId={'vector'} width={'52'} height={'3'} viewBox={"0 0 52 5"}/>
                    </StyledVector>
                    <SectionVectorText>
                        {props.text}
                    </SectionVectorText>
                </div>
                <DescriptionSectionText>
                    {props.description}
                </DescriptionSectionText>
            </FlexContainer>
        </StyledVectorText>
    );
};

const StyledVectorText = styled.div`
  
`

const StyledVector = styled.div`
  display: inline;
  position: relative;
  bottom: 5px;
`
const SectionVectorText = styled.span`
  color: #111;
  font-family: Inconsolata;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 126.023%; /* 22.684px */
  letter-spacing: 3.6px;
  text-transform: uppercase;
`

const DescriptionSectionText = styled.h3`
  color: #111;
  font-family: Manrope;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 150.023%; /* 78.012px */
  letter-spacing: -1.04px;
`

