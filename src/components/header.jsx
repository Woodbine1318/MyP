import { useLocation } from '@reach/router';
import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Container from './container';
import Logo from './logo';

const Header = () => {
  const { pathname } = useLocation();
  const {
    site: {
      siteMetadata: { contactInfo },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          contactInfo {
            email
          }
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 left-0 py-10 bg-white z-10 md:py-16 md:px-16">
      <Container className="flex flex-row justify-between items-center">
        {pathname === '/' ? <div className="flex-1" /> : null}

        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        <nav className="flex-1 text-right">
          {pathname !== '/' ? (
            <p className="text-sm text-right md:text-base">
              Reach out to{' '}
              <a href={`mailto:${contactInfo.email}`} className="underline font-semibold">
                {contactInfo.email}
              </a>
            </p>
          ) : (
            <Link to="/blog" className="font-semibold text-md md:text-lg">
              Blog
            </Link>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
