import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = (props) => (
  <ContentWrap>
    <small>{props.subheading}</small>
    <h2>{props.heading}</h2>
    {props.children}
  </ContentWrap>
);

const ContentWrap = styled.div`
  align-self: center;
  
  h2 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }
`;

Content.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Content;