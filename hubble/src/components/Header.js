import React from 'react';
import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='logo'></Logo>
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
