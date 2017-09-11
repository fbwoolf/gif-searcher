import React from 'react'
import styled from 'styled-components'

const GifStyle = styled.section`
  {
    background: ${props => props.theme.white};
    color: ${props => props.theme.darkgrey};

    .image-container {
      position: relative;
      width: 100%;
    }

    .gif-image {
      display: block;
      width: 100%;
      height: auto;
      padding: 10px;
      background: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.medgrey};
    }
  }
`
export default GifStyle
