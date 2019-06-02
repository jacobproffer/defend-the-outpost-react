import React from 'react';
import styled from 'styled-components';
import Drone from './Drone';

const Footer = () => (
  <SiteFooter>
    <Drone />
  </SiteFooter>
);

const SiteFooter = styled.footer`
  padding: 40px 0;
  text-align: center;
`;

export default Footer;