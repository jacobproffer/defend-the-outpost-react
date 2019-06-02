import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import noise from '../static/noise.png';

const Section = (props) => (
  <StyledSection styles={props.styles}>
    {props.children}
    <UavView>
    <img src={props.image} alt="The compound."/>
    </UavView>
    <Texture />
  </StyledSection>
);

const StyledSection = styled.section`
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, .1);
  overflow: hidden;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    content: '';
    background-color: #1d1d1d;
    mix-blend-mode: overlay;
  }

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

const UavView = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Texture = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  content: '';
  background-image: url(${noise});
  opacity: .6;
  pointer-events: none;
`;

Section.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
};

export default Section;