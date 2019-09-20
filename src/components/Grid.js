import styled, {css} from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 116px;

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

Grid.Item = styled.div`
  grid-column: span ${props => props.span || 1};
  align-self: center;

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Grid;
