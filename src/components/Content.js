import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Content = (props) => (
  <ContentWrap styles={props.styles}>
    <small>{props.subheading}</small>
    <h2>{props.heading}</h2>
    {props.children}
  </ContentWrap>
);

const ContentWrap = styled.div`
  position: relative;
  z-index: 9;
  
  h2 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Content;