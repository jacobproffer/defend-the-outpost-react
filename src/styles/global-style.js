import { createGlobalStyle } from 'styled-components';
import screen from 'superior-mq';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Share+Tech&display=swap');

  :root {
    --container: 1240px;
    --container-gutter: calc((100vw - var(--container)) / 2);
    --white: #fff;
    --black: #070707;
    --gray: #868686;
    --yellow: #edcb45;

    ${screen.below('1440px', `
      --container: 1000px;
    `)}
  }

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
    color: var(--white);
    background-color: var(--black);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    border: 0;
  }
  
  a {
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 300ms ease-in-out;

    &:hover {
      color: var(--yellow);
    }
  }

  p {
    color: var(--gray);
    line-height: 2;
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  small {
    position: relative;
    z-index: 8;
    padding-top: 0;
    color: var(--yellow);
    text-transform: uppercase;
  }

  h1,
  h2 {
    font-family: 'Share Tech', sans-serif;
    text-transform: uppercase;
  }

  h1 {
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

  h2 {
    margin-top: 0;
    
    ${screen.above('480px', `
      font-size: 1.5rem;
    `)}

    ${screen.above('640px', `
      font-size: 2rem;
    `)}

    ${screen.above('800px', `
      font-size: 2.5rem;
    `)}

    ${screen.above('1024px', `
      font-size: 3rem;
    `)}
  }

`;

export default GlobalStyle;