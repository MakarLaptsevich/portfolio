import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {VectorText} from "../../../components/VectorText";
import {Container} from "../../../components/Container";
import {TextWhoAmISkills} from "../../../components/whoAmI/TextWhoAmISkills";
import {MySkill} from "../../../components/skills/MySkill";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexContainer>
                    <VectorText text={'SKILLS'}
                                description={'Skills that I have so far, to provide my clients best products.'}/>
                    <Description>
                        <TextWhoAmISkills
                            text={'Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.'}/>
                        <MySkill textSkill={'design'} textPercentSkill={'90%'}/>
                        <MySkill textSkill={'art direction'} textPercentSkill={'95%'}/>
                        <MySkill textSkill={'branding'} textPercentSkill={'93%'}/>
                        <MySkill textSkill={'website design'} textPercentSkill={'80%'}/>
                    </Description>
                </FlexContainer>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  height: 693px;
  padding-top: 130px;
`
const Description = styled.div`
  width: 50%;
  margin-right: 10px;
`


