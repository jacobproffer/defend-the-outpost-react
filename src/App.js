import React, {Component} from 'react';
import GlobalStyle from './styles/global-style';
import Header from './components/Header';
import Hero from './components/Hero';
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
        <Footer />
      </main>
    );
  }
}

export default App;
