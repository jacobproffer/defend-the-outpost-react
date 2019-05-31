import React from 'react';
import styled from 'styled-components';

const Corner = () => (
  <CornerSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
    <path fill="#fff" opacity=".1" d="M0 0v49h49v-2H2V0H0z"/>
  </CornerSVG>
);

const CornerSVG = styled.svg`
  position: absolute;
  bottom: -25px;
  left: -25px;
  width: 49px;
  height: 45px;
`;

export default Corner;