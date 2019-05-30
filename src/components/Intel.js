import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Grid from './Grid';
import GridItem from './GridItem';

const gridStyles = `
  grid-row-gap: 50px;
`;

const Intel = () => (
  <IntelBlock>
    <Grid styles={gridStyles}>
      <GridItem>
        <h3>Gathered Intelligence</h3>
      </GridItem>
      <GridItem>
        <p>It's up to you and three comrades to defend the last outpost of Altis against a horde of over a hundred infected. Ammo and supplies are limited but an armed Greyhawk is on standby to provide close air support. Can you make it out alive?</p>
      </GridItem>
      <GridItem>
        <h3>Mod Information</h3>
      </GridItem>
      <GridItem>
        <p>You only need to download one mod to play this scenario, which is <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=501966277" target="_blank" rel="noopener noreferrer">Zombies &amp; Demons</a>.</p>
      </GridItem>
    </Grid>
  </IntelBlock>
);

const IntelBlock = styled.div`
  padding-top: 50px;

  h3 {
    margin-top: 0;
    text-transform: uppercase;
  }

  p {
    margin: 0;
  }

  ${screen.above('1024px', `
    padding-top: 100px;
  `)}
`;

export default Intel;