import styled, { css } from 'styled-components';

const Container = styled.div`
  max-width: var(--container);
  margin: auto;
  padding: 0 20px;

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Container;
