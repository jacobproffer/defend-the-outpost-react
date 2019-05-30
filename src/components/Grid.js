import React from 'react';
import styled, {css} from 'styled-components';
import screen from 'superior-mq';

const Grid = (props) => (
  <GridBlock styles={props.styles}>
    {props.children}
  </GridBlock>
);

const GridBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${screen.below('1024px', `
    grid-template-columns: repeat(1, 1fr);
  `)}

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Grid;