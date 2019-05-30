import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Intel from './Intel';

const Intro = (props) => (
  <IntroSection id="info">
    <Container>
      <InfoWrap>
        <h4>{props.subheading}</h4>
        <h2>{props.heading}</h2>
        <Intel />
      </InfoWrap>
    </Container>
  </IntroSection>
);

const IntroSection = styled.section`
  padding: 75px 0;

  h2 {
    padding-bottom: 50px;
    margin-bottom: 0;
    border-bottom: 1px solid #6e6e6e;

    ${screen.above('1024px', `
      padding-bottom: 100px;
    `)}
  }

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }

  ${screen.above('1024px', `
    padding: 150px;
  `)}
`;

const InfoWrap = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

Intro.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

export default Intro;