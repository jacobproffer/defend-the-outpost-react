import styled, {css} from 'styled-components';
import screen from 'superior-mq';

const Container = styled.div`
  max-width: var(--container);
  margin: 0 auto;

  ${screen.below('1440px', `
    padding: 0 5%;
  `)}

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Container;