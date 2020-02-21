import styled, { css } from 'styled-components';
import InlineLink from './InlineLink';

const StyledLink = styled(InlineLink)`
  position: relative;
  text-transform: uppercase;

  &::before {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--yellow);
    transition: color .5s ease-in-out, background-color .5s ease-in-out;
    content: "";
  }

  &:hover {
    color: var(--yellow);

    &::before {
      background-color: var(--border);
    }
  }

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default StyledLink;
