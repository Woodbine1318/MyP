import { Link } from 'gatsby';
import React from 'react';
import Container from './container';
import Logo from './logo';

const Header = () => (
  <header className="sticky top-0 left-0 py-10 px-8 bg-white z-10 md:py-16 md:px-16">
    <Container>
      <Link to="/">
        <Logo />
      </Link>
    </Container>
  </header>
);

export default Header;
