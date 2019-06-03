import React from 'react';
import Section from './Section';
import Container from './Container';
import Content from './Content';
import Corner from './Corner';
import SquareImage from './SquareImage';
import image from '../static/infected.jpg';
import imageSquare from '../static/compound-square.jpg';

const sectionStyles = `
  padding: 130px 0 400px;
`;

const cornerStyles = `
  right: -25px;
  transform: scaleX(-1);
`;

const contentStyles = `
  max-width: 620px;
  margin: auto;
`;

const imageStyles = `
  left: 0;
`;

const Warning = () => (
  <Section
    image={image}
    styles={sectionStyles}
  >
    <Container>
      <Content
        subheading="Warning"
        heading="Infected Inbound"
        styles={contentStyles}
      >
        <p>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. In life there will be road blocks but we will over come it. Another one. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile.</p>
      </Content>
    </Container>
    <SquareImage
      image={imageSquare}
      alt="Zombie."
      styles={imageStyles}
    >
      <Corner styles={cornerStyles} />
    </SquareImage>
  </Section>
);

export default Warning;