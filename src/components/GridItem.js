import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const GridItem = (props) => (
  <Item styles={props.styles}>
    {props.children}
  </Item>
);

const Item = styled.div`
  ${props => props.styles && css`
    ${props.styles}
  `}
`;

GridItem.propTypes = {
  children: PropTypes.node
};

export default GridItem;