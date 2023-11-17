import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import styled from "styled-components";
import {VectorText} from "../../../components/VectorText";
import {Container} from "../../../components/Container";
import {TextWhoAmISkills} from "../../../components/whoAmI/TextWhoAmISkills";
import {TextBtn} from "../../../components/TextBtn";


export const WhoAmI = () => {
    return (
        <StyledWhoAmI>
            <Container>
                <FlexContainer>
                    <StyledVectorText>
                        <VectorText text={'WHO AM I'}
                                    description={'I\'m Art Director & Brand Designer based in Los Angeles, USA.'} />
                    </StyledVectorText>
                    <Description>
                        <TextWhoAmISkills text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta explicabo. '} />
                        <TextWhoAmISkills text={'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus error sit voluptatem accusan.'}/>
                        <BtnAboutMe>
                            <TextBtn text={'about me'}/>
                        </BtnAboutMe>
                    </Description>
                </FlexContainer>
            </Container>
        </StyledWhoAmI>
    );
};



const StyledWhoAmI = styled.section`
  height: 874px;
  padding-top: 230px;
`
const Description = styled.div`
  width:50%;
`
const BtnAboutMe = styled.button `
  margin-top: 32px;
  background: #111;
  width: 188px;
  height: 62px;
  margin-left: 55px;
`
const StyledVectorText = styled.div `
  width: 50%;
`