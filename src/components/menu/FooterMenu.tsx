import React from 'react';
import styled from "styled-components";

export const FooterMenu = () => {
    return (
        <StyledFooter>
            <ul>
                <li>
                    <a href="">Facebook</a>
                </li>
                <li>
                    <a href="">Twitter</a>
                </li>
                <li>
                    <a href="">LinkedIn</a>
                </li>
                <li>
                    <a href="">Youtube</a>
                </li>
            </ul>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
  ul li {
    text-decoration: underline;
    color: #282828;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 225.023%; /* 45.005px */
  }

  ul {
    display: flex;
    gap: 50px;
  }
`
