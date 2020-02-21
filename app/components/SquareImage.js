import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import RatioImg from './RatioImg';

const Image = styled.div`
  position: absolute;
  top: 50%;
  z-index: 9;
  transform: translateY(-50%);

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

const SquareImage = ({ src, alt, styles }) => (
  <Image styles={styles}>
    <RatioImg
      src={src}
      alt={alt}
      width={200}
      height={200}
    />
  </Image>
);

SquareImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default SquareImage;
