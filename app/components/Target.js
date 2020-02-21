import React from 'react';
import styled from 'styled-components';

const Target = () => (
  <TargetSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435 290">
    <path fill="#fff" opacity=".1" d="M49 0H0v49h2V2h47V0zM0 241v49h49v-2H2v-47H0zM386 290h49v-49h-2v47h-47v2zM435 49V0h-49v2h47v47h2z" />
    <g opacity=".1" fill="#fff">
      <path d="M216.5 53.17h2v85h-2zM216.5 158.17h2v85h-2zM312.5 147.17v2h-85v-2zM207.5 147.17v2h-85v-2zM216.5 147.17h2v2h-2z" />
    </g>
  </TargetSVG>
);

const TargetSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export default Target;
