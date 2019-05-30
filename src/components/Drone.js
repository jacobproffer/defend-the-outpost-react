import React from 'react';
import styled from 'styled-components';

const Drone = () => (
  <DroneSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 25">
    <path className="dronePath" d="M44 12.7v-1.8L23 10V8.7s.3-3.2.5-3.8c.3-.6.6-4.9-1.5-4.9s-1.8 4.3-1.6 4.9.5 3.8.5 3.8V10L0 10.9v1.8l21 .8.1 7.2-5.1-.5v2l5.1.6v.3c.1.1.3.1.4.1v1.3s.1.3.5.4h.1c.4-.1.5-.4.5-.4v-1.3c.1 0 .2-.1.4-.1v-.3l5.1-.6v-2l-5.1.5.1-7.2 20.9-.8z"/>
  </DroneSVG>
);

const DroneSVG = styled.svg`
  display: block;
  width: 44px;
  height: 25px;
  margin: 0 auto;

  .dronePath {
    fill: #fff;
  }
`;

export default Drone;