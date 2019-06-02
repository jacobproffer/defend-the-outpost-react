import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Target from './Target';
import Corner from './Corner';
import image from '../static/compound.jpg';
import imageSquare from '../static/compound-square.jpg';
import noise from '../static/noise.png';

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const cornerStyles = `
  left: -25px;
`;

const Hero = (props) => (
  <HeroSection>
    <Container>
      <header>
        <small>{props.subheading}</small>
        <h1>{props.heading}</h1>
      </header>
    </Container>
    <UavView />
    <Texture />
    <TargetWrap>
      <Target />
    </TargetWrap>
    <CompoundImage>
      <img src={imageSquare} alt="The compound."/>
      <Corner styles={cornerStyles} />
    </CompoundImage>
  </HeroSection>
);

const HeroSection = styled.section`
  position: relative;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  overflow: hidden;
  outline: none;

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

  header {
    ${screen.above('1024px', `
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;
    `)}
  }

  h1 {
    position: relative;
    z-index: 8;
    margin: 0 0 0 -5px;
    color: #fff;
    line-height: 1.5;
  }

  ${screen.below('1024px', `
    padding: 200px 0;
  `)}

  ${screen.above('1024px', `
    height: 100vh;
  `)}
`;

const UavView = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${image});
  will-change: transform;
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

const CompoundImage = styled.figure`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 9;
  transform: translateY(-50%);
`;

const TargetWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 435px;
  height: 290px;
  transform: translate(-50%, -50%);
  pointer-events: none;

  svg {
    animation: ${pulse} 2s linear infinite;
  }

  ${screen.below('1024px', `
    width: 326px;
    height: 218px;
  `)}
`;

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
};

export default Hero;