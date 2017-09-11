import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const SearchButton = styled.button`
	position: relative;
  background: ${props => props.theme.green};
  color: ${props => props.theme.white};
  width: 50%;
  height: 40px;
  text-align: center;
  font-size: 1rem;
  margin: 20px 30px;
  border: none;
`
export default SearchButton
