import styled, {css} from 'styled-components';

const Container = styled.div`
  max-width: var(--container);
  margin: 0 auto;

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Container;