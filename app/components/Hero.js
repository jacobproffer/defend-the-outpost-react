import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Target from './Target';
import Corner from './Corner';
import Section from './Section';
import RatioImg from './RatioImg';

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

const sectionStyles = `
  text-align: left;

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

const cornerStyles = `
  left: -25px;
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

const SquareImage = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 200px;
  height: 200px;
  z-index: 11;
  transform: translateY(-50%);
`;

const Hero = ({ subheading, heading }) => (
  <Section
    image="/img/compound.jpg"
    styles={sectionStyles}
  >

    {subheading && heading &&
      <Container>
        <header>
          <small>{subheading}</small>
          <h1>{heading}</h1>
        </header>
      </Container>
    }

    <TargetWrap>
      <Target />
    </TargetWrap>
    <SquareImage>
      <RatioImg
        src="/img/compound-square.jpg"
        alt="The Compound."
        width={200}
        height={200}
      />
      <Corner styles={cornerStyles} />
    </SquareImage>
  </Section>
);

Hero.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Hero;
