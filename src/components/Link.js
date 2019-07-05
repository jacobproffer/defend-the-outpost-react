import styled, {css} from 'styled-components';

const Link = styled.a`
  position: relative;
  text-transform: uppercase;

  &::before {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--border);
    transition: background-color .5s ease-in-out;
    content: '';
  }

  &:hover {
    &::before {
      background-color: var(--yellow);
    }
  }

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Link;