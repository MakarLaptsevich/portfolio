import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {HeaderMenu} from "../menu/HeaderMenu";

export const Logo = () => {
    return (
        <StyledLogo>
            <a href="">
                <Icon iconId={'burger-menu'}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  position: absolute;
  right: 250px;
  top: 10px;
  z-index: 9999;
  :
`
