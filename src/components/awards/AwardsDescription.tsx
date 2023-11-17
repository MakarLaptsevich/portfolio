import React from 'react';
import styled from "styled-components";
import {Awards} from "../../layout/sections/awards/Awards";

type AwardsDescriptionPropsType = {
    color?: string
}
export const AwardsDescription = (props: AwardsDescriptionPropsType) => {
    return (
        <StyledAwardsDescription>
            <AwardsRecognition>
                Interior design
            </AwardsRecognition>
            <AwardsText>
                Breakthrough designer of the year 2020
            </AwardsText>
        </StyledAwardsDescription>
    );
};

const StyledAwardsDescription = styled.div`
  border-bottom: 1px solid #E2E2E2;;
  padding-bottom: 40px;
  padding-top: 55px;
`
const AwardsRecognition = styled.h5`
  color: #111;
  font-family: Manrope;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`
const AwardsText = styled.h5`
  color: #282828;
  font-family: Manrope;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 188.023%; /* 35.724px */
  letter-spacing: 0.38px;
`