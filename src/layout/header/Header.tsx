import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "../../components/menu/HeaderMenu";
import {Container} from "../../components/Container";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <HeaderMenu/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  
`
