import React from 'react';
import GlobalStyle from './styles/global-style';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Warning from './components/Warning';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Hero
        subheading="An Arma 3 Scenario"
        heading="Defend the Outpost"
      />
      <main>
        <Intro />
        <Warning />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default App;
