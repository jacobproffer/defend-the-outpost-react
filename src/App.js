import React, {Component} from 'react';
import GlobalStyle from './styles/global-style';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
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
        <Intro
          subheading="Briefing"
          heading="Altis Has Fallen"
        >
          <p>Lorem Khaled Ipsum is a major key to success. Life is what you make it, so let’s make it. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. In life there will be road blocks but we will over come it. Another one. The key is to enjoy life, because they don’t want you to enjoy life.</p>
        </Intro>
        <Footer />
      </main>
    );
  }
}

export default App;
