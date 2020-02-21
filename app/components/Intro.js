import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Grid from './Grid';
import Content from './Content';
import Corner from './Corner';
import LazyImg from './LazyImg';

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

const gridStyles = `
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 80px;
  align-items: center;
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
  background-image: url("/img/topography.svg");
  opacity: .6;
  mix-blend-mode: overlay;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const Intro = () => (
  <IntroSection>
    <Grid styles={gridStyles}>
      <ImageWrap>
        <LazyImg
          src="/img/altis.jpg"
          width={1440}
          height={810}
          alt="Small village on the island of Altis."
        />
        <Corner styles={cornerRight} />
      </ImageWrap>
      <Grid.Item>
        <Content
          subheading="Briefing"
          heading="Altis Has Fallen"
          styles={contentRight}
        >
          <p>Lorem Khaled Ipsum is a major key to success.
          Life is what you make it, so let’s make it. Wraith talk.
          You should never complain, complaining is a weak emotion,
          you got life, we breathing, we blessed. In life there will
          be road blocks but we will over come it. Another one.</p>
        </Content>
      </Grid.Item>
      <Grid.Item>
        <Content
          subheading="Available Assets"
          heading="Drone on Standby"
          styles={contentLeft}
        >
          <p>Lorem Khaled Ipsum is a major key to success.
          Life is what you make it, so let’s make it. Wraith talk.
          You should never complain, complaining is a weak emotion,
          you got life, we breathing, we blessed. In life there will
          be road blocks but we will over come it. Another one.</p>
        </Content>
      </Grid.Item>
      <ImageWrap>
        <LazyImg
          src="/img/drone.jpg"
          alt="Predator drone."
          width={1440}
          height={810}
        />
        <Corner styles={cornerLeft} />
      </ImageWrap>
    </Grid>
    <Topography />
  </IntroSection>
);

export default Intro;
