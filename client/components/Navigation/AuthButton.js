import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const AuthButton = styled.button`
  background: ${props => props.theme.green};
  color: ${props => props.theme.white};
  width: 85%;
  height: 40px;
  text-align: center;
  font-size: 1rem;
  margin: 20px 30px;
  border: none;

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
`
export default AuthButton
