import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp';
import {FlexContainer} from "../../../components/FlexContainer";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {Creatify} from "../../../components/main/Creatify";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer align={"center"} justify={"space-around"}>
                    <Content>
                        <Creatify/>
                        <Icon iconId={'hand'}/>
                        <Welcome>HI! EVERYONE</Welcome>
                        <MyName>Simon John Brand Designer</MyName>
                        <ImDoing>Make designs mainly logos, visual identities, apps & websites, social media and
                            magazines.</ImDoing>
                        <BtnGetIn>get in touch</BtnGetIn>
                    </Content>
                    <Photo src={photo} alt=""/>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
  position: relative;
  width: 950px;
  height: 936px;
  object-fit: cover;
  left: 165px;
`

const StyledMain = styled.section`
  min-height: 936px;
  background-color: blueviolet;
`
const Content = styled.div `
  padding-right: 30px;
`
const Welcome = styled.span `
  color: #717171;
  font-family: Inconsolata;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 126.023%; /* 22.684px */
  letter-spacing: 4.32px;
  text-transform: uppercase;
`
const MyName = styled.h2 `
  margin-top: 45px;
  color: #111;
  font-family: Manrope;
  font-size: 74px;
  font-style: normal;
  font-weight: 700;
  line-height: 121.523%; /* 89.927px */
  letter-spacing: -1.48px;
  text-transform: capitalize;
`
const ImDoing = styled.h1 `
  margin-top: 30px;
  color: #282828;
  font-family: Manrope;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 234.523%; /* 44.559px */
  letter-spacing: 0.38px;
`
const BtnGetIn = styled.button `
  margin-top: 75px;
  border-radius: 40px;
  border: 2px solid #E2E2E2;
  width: 251px;
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
`