import React from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import ImageOne from '../static/50-thumb.jpg';

const gridItemStyles = `
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageGrid = () => (
  <section>
    <Grid>
      <GridItem styles={gridItemStyles}>
        <img src={ImageOne} alt="Soldier on a .50." />
      </GridItem>
      <GridItem styles={gridItemStyles}>
        <img src={ImageOne} alt="Soldier on a .50." />
      </GridItem>
      <GridItem styles={gridItemStyles}>
        <img src={ImageOne} alt="Soldier on a .50." />
      </GridItem>
      <GridItem styles={gridItemStyles}>
        <img src={ImageOne} alt="Soldier on a .50." />
      </GridItem>
    </Grid>
  </section>
);

export default ImageGrid;