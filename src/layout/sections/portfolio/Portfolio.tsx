import React from 'react';
import styled from "styled-components";
import {VectorText} from "../../../components/VectorText";
import {PortfolioMenu} from "../../../components/portfolio/PortfolioMenu";
import {WorksMenu} from "../../../components/portfolio/WorksMenu";
import {Container} from "../../../components/Container";
import {TextBtn} from "../../../components/TextBtn";
import {FlexContainer} from "../../../components/FlexContainer";


export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <FlexContainer direction={'column'} align={'center'} gap={'60px'}>
                    <VectorText text={'PORTFOLIO'} description={'Latest Works'}/>
                    <PortfolioMenu/>
                    <WorksMenu/>
                    <BtnViewAll>
                        <TextBtn text={'VIEW ALL WORKS'}/>
                    </BtnViewAll>
                </FlexContainer>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
  padding: 160px 0;
`
const BtnViewAll = styled.button`
  width: 238px;
  height: 62px;
  background: #111;
`

