import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo-port.webp'
import {VectorText} from "../../../components/VectorText";
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <Container>
                <FlexContainer gap={'140px'}>
                    <Photo src={photo} alt=""/>
                    <MainContent>
                        <VectorText text={'TESTIMONIALS'}/>
                        <TestDescription>“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et,
                            massa, turpis
                            nec
                            dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur
                            adipiscing.”</TestDescription>
                        <TestName>
                            Lucas wolfer
                        </TestName>
                        <TestPosition>
                            ceo - raisins
                        </TestPosition>
                    </MainContent>
                </FlexContainer>
            </Container>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
  height: 650px;
`
const Photo = styled.img`
  height: 650px;
  width: 671px;
  object-fit: cover;
  position: absolute;
  right: 850px;
`

const MainContent = styled.div`
  padding-top: 125px;
  padding-left: 600px;

`
const TestDescription = styled.h3`
  color: #111;
  font-family: Manrope;
  font-size: 29px;
  font-style: normal;
  font-weight: 400;
  line-height: 183.023%; /* 53.077px */
  letter-spacing: 0.29px;
  margin-bottom: 25px;
`
const TestName = styled.h6`
  color: #111;
  font-family: Manrope;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 225.023%; /* 47.255px */
  letter-spacing: 0.42px;
  text-transform: capitalize;
`
const TestPosition = styled.h6`
  color: #737373;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 178.523%; /* 24.993px */
  letter-spacing: 0.7px;
  text-transform: uppercase;
`