import styled from 'styled-components';
import screen from 'superior-mq';

const Container = styled.div`
  max-width: 1240px;
  padding: 0 2.5%;
  margin: 0 auto;

  ${screen.below('1280px', `
    padding: 0 5%;
  `)}
`;

export default Container;