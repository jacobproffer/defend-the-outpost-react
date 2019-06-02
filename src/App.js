import React, {Component} from 'react';
import GlobalStyle from './styles/global-style';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Warning from './components/Warning';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <main>
        <GlobalStyle />
        <Header />
        <Hero
          subheading="An Arma 3 Scenario"
          heading="Defend the Outpost"
        />
        <Intro />
        <Warning />
        <Footer />
      </main>
    );
  }
}

export default App;
