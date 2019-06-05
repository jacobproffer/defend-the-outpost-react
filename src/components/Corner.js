import React from 'react';
import styled, {css} from 'styled-components';

const Corner = (props) => (
  <CornerWrap styles={props.styles}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
      <path fill="#fff" opacity=".1" d="M0 0v49h49v-2H2V0H0z"/>
    </svg>
  </CornerWrap>
);

const CornerWrap = styled.div`
  position: absolute;
  bottom: -25px;
  z-index: 9;
  width: 49px;
  height: 45px;

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Corner;