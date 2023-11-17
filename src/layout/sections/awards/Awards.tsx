import React from 'react';
import styled from "styled-components";
import {VectorText} from "../../../components/VectorText";
import {FlexContainer} from "../../../components/FlexContainer";
import {AwardsDescription} from "../../../components/awards/AwardsDescription";
import {Container} from "../../../components/Container";

export const Awards = () => {
    return (
        <StyledAwards>
            <Container>
                    <VectorText text={'AWARDS'} description={'Awards & Recognition'}/>
                    <FlexContainer wrap={'wrap'} justify={'space-between'}>
                        <AwardsDescription/>
                        <AwardsDescription/>
                        <AwardsDescription/>
                        <AwardsDescription/>
                        <AwardsDescription/>
                        <AwardsDescription/>
                    </FlexContainer>
            </Container>
        </StyledAwards>
    );
};

const StyledAwards = styled.section`
  height: 773px;
  padding: 160px 0;
`

