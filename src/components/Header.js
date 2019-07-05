import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Drone from './Drone';
import Container from './Container';
import Link from './Link';

const navList = [
  {
    id: 1,
    title: 'Download',
    link: '#',
  }
];

const isExternal = (url) => url.match(/^(https?:)?\/\/|mailto:/);

const Header = () => (
  <SiteHeader>
    <Container>
      <SiteHeaderGrid>
        <Logo>
          <Drone />
        </Logo>
        <UnorderedList>
          {navList.map(item => (
            <li key={item.id}>
              <Link href={item.link} target={isExternal(item.link) ? '_blank' : undefined}>
                {item.title}
              </Link>
            </li>
          ))}
        </UnorderedList>
      </SiteHeaderGrid>
    </Container>
  </SiteHeader>
);

const SiteHeader = styled.header`
  position: absolute;
  z-index: 9;
  width: 100%;
  padding: 100px 0;

  ${screen.below('1024px', `
    padding: 50px 0;
  `)}
`;

const SiteHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Logo = styled.a`
  cursor: pointer;
  
  svg {
    margin: 0;
  }
`;

const UnorderedList = styled.ul`
  align-self: end;
  padding: 0;
  margin: 0;
  text-align: right;

  li {
    display: inline-block;
  }
`;
 
export default Header;