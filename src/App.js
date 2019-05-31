import React, {Component} from 'react';
import GlobalStyle from './styles/global-style';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <main>
        <GlobalStyle />
        <Header />
        <Hero 
          heading="Defend the Outpost"
          subheading="An Arma 3 Scenario"
        />
        <Intro
          subheading="The SITREP"
          heading="The quarantine of Altis has failed and the few remaining survivors must band together at a remote outpost near Sagonisi."
        />
        <ImageGrid />
        <Footer />
      </main>
    );
  }
}

export default App;
