import React from 'react';
import styled from "styled-components";

export const HeaderMenu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">who am i</a>
                </li>
                <li>
                    <a href="">my skills</a>
                </li>
                <li>
                    <a href="">portfolio</a>
                </li>
                <li>
                    <a href="">testimonials</a>
                </li>
                <li>
                    <a href="">awards</a>
                </li>
                <li>
                    <a href="">blogs</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
  ul {
    position: absolute;
    right: 150px;
    top: -250px;
    height: 200px;
    z-index: 20;
  }
  ul li {
    padding: 10px;
  }
`

