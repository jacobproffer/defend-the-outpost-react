import { createGlobalStyle } from 'styled-components';
import screen from 'superior-mq';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Share+Tech&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::-moz-selection { background: rgba(0, 0, 0, .9); }
  ::selection { background: rgba(0, 0, 0, .9); }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    color: #fff;
    background: #000;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    border: 0;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    transition: color 300ms ease-in-out;

    &:hover {
      color: #000;
    }
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  h1 {
    font-family: 'Share Tech', sans-serif;
    text-transform: uppercase;

    ${screen.above('480px', `
      font-size: 2rem;
    `)}

    ${screen.above('640px', `
      font-size: 2.5rem;
    `)}

    ${screen.above('800px', `
      font-size: 3rem;
    `)}

    ${screen.above('1024px', `
      font-size: 4rem;
    `)}
  }

`;

export default GlobalStyle;