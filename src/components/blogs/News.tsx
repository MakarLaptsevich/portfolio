import React from 'react';
import styled from "styled-components";

type StyledNewsPopsType = {
    textNews: string
}
export const News = (props: StyledNewsPopsType) => {
    return (
        <StyledNews>
            <NewsText>{props.textNews}</NewsText>
            <BtnReadMore>
                Read More
            </BtnReadMore>
        </StyledNews>
    );
};

const StyledNews = styled.div `
  border-right: 1px solid #E3E3E3;
  width: 270px;
  margin-top: 80px;
  padding-right: 20px;
`
const BtnReadMore = styled.button `
  width: 80px;
  height: 20px;
  background-color: black;
  color: white;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  margin-top: 20px;
`
const NewsText = styled.h3 `
  color: #282828;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 176%; /* 31.68px */
  letter-spacing: 0.54px;
  text-transform: capitalize;
`