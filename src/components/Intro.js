import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import screen from 'superior-mq';

const Intro = (props) => (
  <IntroSection id="info">
    <IntroGrid>
      <IntroImage />
      <IntroContent>
        <h4>{props.subheading}</h4>
        <h2>{props.heading}</h2>
      </IntroContent>
    </IntroGrid>
  </IntroSection>
);

const IntroSection = styled.section`
  h2 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 100px;
`;

const IntroImage = styled.figure`
  position: relative;
  z-index: 10;
  background-color: red;
`;

const IntroContent = styled.div`
  padding: 75px 0;
`;

Intro.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

export default Intro;