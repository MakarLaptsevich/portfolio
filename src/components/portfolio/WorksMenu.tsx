import React from 'react';
import styled from "styled-components";
import photoOne from "../../assets/images/flex-one.webp"
import photoTwo from "../../assets/images/flex-two.webp"
import photoThree from "../../assets/images/flex-three.webp"
import photoFour from "../../assets/images/flex-four.webp"
import photoFive from "../../assets/images/flex-five.webp"
import photoSix from "../../assets/images/flex-six.webp"
import photoSeven from "../../assets/images/flex-seven.webp"
import photoEight from "../../assets/images/flex-eight.webp"
import photoNine from "../../assets/images/flex-nine.webp"

type PhotoWorksPropsType = {
    height?: string
}
export const WorksMenu = () => {
    return (
        <StyledWorksMenu>
            <PhotoWorks src={photoOne}  alt=""/>
            <PhotoWorks src={photoTwo} height={'248px'}  alt=""/>
            <PhotoWorks src={photoThree}  height={'380px'} alt=""/>
            <PhotoWorks src={photoFour} height={'380px'} alt=""/>
            <PhotoWorks src={photoFive} alt=""/>
            <PhotoWorks src={photoSix} height={'248px'} alt=""/>
            <PhotoWorks src={photoSeven} height={'248px'} alt=""/>
            <PhotoWorks src={photoEight}  alt=""/>
            <PhotoWorks src={photoNine} height={'380px'} alt=""/>
        </StyledWorksMenu>
    );
};

const StyledWorksMenu = styled.div`
  display: flex;
  max-height: 1146px;
  flex-direction: column;
  gap: 40px;
  flex-wrap: wrap;
  align-content: center;
`

const PhotoWorks = styled.img<PhotoWorksPropsType>`
  object-fit: cover;
  width: 369px;
  height: ${props => props.height || '438px'};
`

