import React from 'react';
import styled from 'styled-components';
import Drone from './Drone';

const SiteFooter = styled.footer`
  padding: 40px 0;
  text-align: center;
`;

const Footer = () => (
  <SiteFooter>
    <Drone />
  </SiteFooter>
);

export default Footer;
