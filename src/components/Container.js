import styled, {css} from 'styled-components';
import screen from 'superior-mq';

const Container = styled.div`
  max-width: 1240px;
  padding: 0;
  margin: 0 auto;

  ${screen.below('1280px', `
    padding: 0 5%;
  `)}

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Container;