import React from 'react';
import styled from "styled-components";
import {VectorText} from "../../../components/VectorText";
import {FlexContainer} from "../../../components/FlexContainer";
import {News} from "../../../components/blogs/News";
import {Container} from "../../../components/Container";

export const Blogs = () => {
    return (
        <StyledBlogs>
            <Container>
                <VectorText text={'BLOGS'} description={'Latest News'}/>
                <FlexContainer justify={'center'} gap={'75px'}>
                    <News textNews={'Graphic Designing Useful Tips & Best Practices'}/>
                    <News textNews={'basic typography rules for ui designing'}/>
                    <News textNews={'top 10 graphic designs review in 2021'}/>
                    <BtnViewAll>VIEW ALL WORKS</BtnViewAll>
                </FlexContainer>
            </Container>
        </StyledBlogs>
    );
};

const StyledBlogs = styled.section`
  height: 598px;
  padding: 130px 0;
`
const BtnViewAll = styled.button `
  width: 238px;
  height: 62px;
  background-color: black;
  color: white;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 234.523%; /* 37.524px */
  letter-spacing: 1.6px;
  text-transform: uppercase;
  border: 1px solid black;
  height: 50px;
  margin-top: 100px;
  padding: 0 5px;
`
