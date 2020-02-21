import React, { Fragment } from 'react';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Intro from 'components/Intro';
import Warning from 'components/Warning';
import Footer from 'components/Footer';

const Index = () => (
  <Fragment>
    <Header />
    <main>
      <Hero
        subheading="An Arma 3 Scenario"
        heading="Defend the Outpost"
      />
      <Intro />
      <Warning />
    </main>
    <Footer />
  </Fragment>
);

export default Index;
