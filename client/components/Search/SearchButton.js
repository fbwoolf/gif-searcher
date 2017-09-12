import React from 'react'
import styled from 'styled-components'

const SearchButton = styled.button`
  position: relative;
  background: ${props => props.theme.green};
  color: ${props => props.theme.white};
  width: 15rem;
  height: 40px;
  text-align: center;
  font-size: 1rem;
  border: none;
  padding: 0;

  &:hover {
    background: ${props => props.theme.greenhover};
    color: ${props => props.theme.darkgrey};  
  }

  &:focus {
    outline: none;
  }

  .active {
    color: ${props => props.theme.white};
    background: ${props => props.theme.green};
  }

  @media only screen and (max-width: 768px) {
      width: 90%;
  }   
`
export default SearchButton
