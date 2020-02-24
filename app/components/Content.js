import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const Content = ({ styles, subheading, heading, children }) => (
  <ContentWrap styles={styles}>

    {subheading &&
      <small>{subheading}</small>
    }

    {heading &&
      <header>
        <h2>{heading}</h2>
      </header>
    }

    {children}

  </ContentWrap>
);

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Content;
