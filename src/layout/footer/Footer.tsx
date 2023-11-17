import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FooterMenu} from "../../components/menu/FooterMenu";
import {FlexContainer} from "../../components/FlexContainer";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Content>
                    <FlexContainer direction={'column'} gap={'20px'}>
                        <AreYouWant>Wanna be starting something ?</AreYouWant>
                        <Contact>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</Contact>
                        <Mail>
                            Creatify@gmail.com
                        </Mail>
                        <FooterMenu/>
                    </FlexContainer>
                </Content>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  height: 916px;
  padding: 170px 0;
`
const Content = styled.div `
  width: 50%;
`

const Mail = styled.h5`
  position: relative;
  left: 600px;
  text-decoration: underline;
  color: #111;
  font-family: Manrope;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 183.023%; /* 109.814px */
  letter-spacing: 0.6px;
`
const AreYouWant = styled.h3`
  color: #111;
  font-family: Manrope;
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: 115%; /* 103.5px */
  letter-spacing: 3.6px;
`
const Contact = styled.h5 `
  color: #282828;
  font-family: Manrope;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 225.023%; /* 49.505px */
  letter-spacing: 0.44px;
`

