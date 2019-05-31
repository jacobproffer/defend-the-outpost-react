import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import image from '../static/compound.jpg';
import imageSquare from '../static/compound-square.jpg';
import noise from '../static/noise.png';
import Target from './Target';

const Hero = (props) => (
  <HeroSection id="top">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
        <path fill="#fff" opacity=".1" d="M0 0v49h49v-2H2V0H0z"/>
      </svg>
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
  }

  h1 {
    position: relative;
    z-index: 8;
    margin: 0;
    color: #fff;
    line-height: 1.5;
  }

  small {
    position: relative;
    z-index: 8;
    padding-top: 0;
    color: #edcb45;
    text-transform: uppercase;
  }

  ${screen.below('1024px', `
    padding-top: 150px;
    padding-bottom: 150px;
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

  svg {
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 49px;
    height: 45px;
  }
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
`;

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
};

export default Hero;