import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Container from './Container';
import Content from './Content';
import Corner from './Corner';
import image from '../static/infected.jpg';

const sectionStyles = `
  padding: 140px 0 200px;
`;

const cornerLeftStyles = `
  top: 0;
  left: 0;
  transform: rotate(90deg);
`;

const cornerRightStyles = `
  right: 0;
  bottom: -50px;
  transform: rotate(-90deg);
`;

const contentStyles = `
  max-width: 620px;
  margin: auto;
  text-align: center;
`;

const containerStyles = `
  position: relative;
`;

const Warning = () => (
  <Section
    image={image}
    styles={sectionStyles}
  >
    <Container styles={containerStyles}>
      <Content
        subheading="Warning"
        heading="Infected Inbound"
        styles={contentStyles}
      />
      <List>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
        <li>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it.</li>
      </List>
      <Corner styles={cornerLeftStyles} />
      <Corner styles={cornerRightStyles} />
    </Container>
  </Section>
);

const List = styled.ul`
  position: relative;
  z-index: 9;
  max-width: 880px;
  padding: 0;
  margin: 30px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 60px;

  li {
    color: #868686;
    line-height: 2;
    list-style-type: none;
  }
`;

export default Warning;