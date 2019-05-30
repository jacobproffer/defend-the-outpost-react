import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import image from '../static/hero.jpg';

const Hero = (props) => (
  <HeroSection id="top">
    <Container>
      <header>
        <h1>{props.heading}</h1>
        <p>{props.subheading}</p>
      </header>
    </Container>
    <UavView />
  </HeroSection>
);

const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
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
    background-color: rgba(131, 3, 3, .95);
    mix-blend-mode: multiply;
  }

  h1 {
    position: relative;
    z-index: 8;
    margin: 0 -.1em 0 0;
    color: #fff;
    line-height: 1.5;
    letter-spacing: .1em;
    border-bottom: 1px solid #6e6e6e;

    ${screen.above('768px', `
      margin: 0 -.15em 0 0;
      letter-spacing: .15em;
    `)}
  }

  p {
    position: relative;
    z-index: 8;
    padding-top: 0;
    color: #fff;
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

  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-image: -webkit-repeating-linear-gradient(top, transparent 0px, transparent 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0.1) 3px);
    background-image: repeating-linear-gradient(top, transparent 0px, transparent 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0.1) 3px);
    background-size: 100% 4px;
  }
`;

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
};

export default Hero;