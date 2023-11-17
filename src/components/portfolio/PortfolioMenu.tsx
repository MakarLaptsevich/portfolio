import React from 'react';
import styled from "styled-components";

export const PortfolioMenu = () => {
    return (
        <StyledPortfolioMenu>
            <ul>
                <li><a href="">All</a></li>
                <li><a href="">Magazines</a></li>
                <li><a href="">Package</a></li>
                <li><a href="">Branding</a></li>
                <li><a href="">Web</a></li>
                <li><a href="">Logo</a></li>
            </ul>
        </StyledPortfolioMenu>
    );
};

const StyledPortfolioMenu = styled.div`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  ul li {
    color: #828282;
    font-family: Manrope;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.57px;
    text-transform: capitalize;
  }
`
