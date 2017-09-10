import React from 'react'
import styled from 'styled-components'

const SearchbarStyle = styled.section`
  position: relative;
  height: 60px;
  width: 100%;
  background-color: ${props => props.theme.lightgrey};
  z-index: 1;
  display: flex;
  align-items: center;
`
export default SearchbarStyle
