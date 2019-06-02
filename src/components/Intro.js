import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Content from './Content';
import image from '../static/zombies.jpg';
import droneImage from '../static/drone.jpg';
import background from '../static/topography.svg';
import Corner from './Corner';

const cornerLeft = `
  left: -25px;
`;

const cornerRight = `
  right: -25px;
  transform: scaleX(-1);
`;

const Intro = (props) => (
  <IntroSection>
    <Container>
      <IntroGrid>
        <figure>
          <img src={image} alt="Zombies" />
        </figure>
        <Content
          subheading="Briefing"
          heading="Altis Has Fallen"
        >
          <p>
            Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. In life there will be road blocks but we will over come it. Another one. The key is to enjoy life, because they don’t want you to enjoy life.
            <Corner styles={cornerLeft} />
          </p>
        </Content>
        <Content
          subheading="Available Assets"
          heading="Drones on Standby"
        >
          <p>
            Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. In life there will be road blocks but we will over come it. Another one. The key is to enjoy life, because they don’t want you to enjoy life.
            <Corner styles={cornerRight} />
          </p>
        </Content>
        <figure>
          <img src={droneImage} alt="Predator Drone." />
        </figure>
      </IntroGrid>
    </Container>
    <Topography />
  </IntroSection>
);

const IntroSection = styled.section`
  position: relative;
  padding: 150px 0;
  border-bottom: 2px solid rgba(255, 255, 255, .1);

  p {
    position: relative;
    margin-bottom: 0;
  }

  ${screen.below('1024px', `
    padding: 75px 0;
  `)}
`;

const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
`;

const Topography = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  opacity: .6;
  mix-blend-mode: overlay;
`;

export default Intro;