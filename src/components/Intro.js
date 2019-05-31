import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Corner from './Corner';
import image from '../static/zombies.jpg';

const Intro = (props) => (
  <IntroSection id="info">
    <Container>
      <IntroGrid>
        <IntroImage>
          <img src={image} alt="Zombies" />
        </IntroImage>
        <IntroContent>
          <small>{props.subheading}</small>
          <h2>{props.heading}</h2>
          <Corner />
          {props.children}
        </IntroContent>
      </IntroGrid>
    </Container>
  </IntroSection>
);

const IntroSection = styled.section`
  padding: 150px 0;

  h2 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }

  ${screen.below('1024px', `
    padding: 75px 0;
  `)}
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
`;

const IntroImage = styled.figure`
  position: relative;
  z-index: 10;
`;

const IntroContent = styled.div`
  position: relative;
  
  p {
    margin-bottom: 0;
  }
`;

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Intro;