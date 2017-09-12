import React from 'react'
import styled from 'styled-components'

const GifStyle = styled.section`
  {
    background: ${props => props.theme.white};
    color: ${props => props.theme.darkgrey};

    .gif-list {
      margin: 1.5em 0;
      padding: 0;
      -moz-column-gap: 1.5em;
      -webkit-column-gap: 1.5em;
      column-gap: 1.5em;
      font-size: .85em;
    }

    .gif-item {
      display: inline-block;
      background: #fff;
      padding: 1em;
      margin: 0 0 1.5em;
      width: 100%;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-shadow: 2px 2px 4px 0 #ccc;

      img {
        width: 100%;
      }
    }

    @media only screen and (min-width: 320px) {
      .gif-list {
          -moz-column-count: 2;
          -webkit-column-count: 2;
          column-count: 1;
      }
    }

    @media only screen and (min-width: 768px) {
      .gif-list {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 2;
      }
    }

    @media only screen and (min-width: 992px) {
      .gif-list {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 3;
      }
    }

    @media only screen and (min-width: 1200px) {
      .gif-list {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 4;
      }
    }
`
export default GifStyle