import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Grid from './Grid';
import Content from './Content';
import altis from '../static/altis.jpg';
import drone from '../static/drone.jpg';
import background from '../static/topography.svg';
import Corner from './Corner';

const cornerLeft = `
  left: -25px;
`;

const cornerRight = `
  right: -25px;
  transform: scaleX(-1);
`;

const contentLeft = `
  margin-left: var(--container-gutter);
`;

const contentRight = `
  margin-right: var(--container-gutter);
`;

const IntroSection = styled.section`
  position: relative;
  padding: 150px 0 175px;
  border-bottom: 2px solid var(--border);

  figure {
    position: relative;
  }

  p {
    position: relative;
    margin-bottom: 0;
  }

  ${screen.below('1024px', `
    padding: 75px 0;
  `)}
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

const LeftContent = styled(Grid.Item)`
  grid-column: 1 / span 5;
`;

const RightContent = styled(Grid.Item)`
  grid-column: 8 / -1;
`;

const RightImage = styled(Grid.Item)`
  grid-column: 7 / -1;
`;

const Intro = (props) => (
  <IntroSection>
    <Grid>
      <Grid.Item span={6}>
        <figure>
          <img src={altis} alt="Small village on the island of Altis." />
          <Corner styles={cornerRight} />
        </figure>
      </Grid.Item>
      <RightContent>
        <Content
          subheading="Briefing"
          heading="Altis Has Fallen"
          styles={contentRight}
        >
          <p>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. In life there will be road blocks but we will over come it. Another one.</p>
        </Content>
      </RightContent>
      <LeftContent>
        <Content
          subheading="Available Assets"
          heading="Drone on Standby"
          styles={contentLeft}
        >
          <p>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. In life there will be road blocks but we will over come it. Another one.</p>
        </Content>
      </LeftContent>
      <RightImage>
        <figure>
          <img src={drone} alt="Predator drone." />
          <Corner styles={cornerLeft} />
        </figure>
      </RightImage>
    </Grid>
    <Topography />
  </IntroSection>
);

export default Intro;