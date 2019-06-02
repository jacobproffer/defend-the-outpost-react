import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const SquareImage = (props) => (
  <Figure styles={props.styles}>
    <img src={props.image} alt={props.alt} />
    {props.children}
  </Figure>
);

const Figure = styled.figure`
  position: absolute;
  top: 50%;
  z-index: 9;
  transform: translateY(-50%);

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

SquareImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node
};

export default SquareImage;