import React from 'react'
import styled from 'styled-components'

const RemoveSearchButton = styled.button`
  color: ${props => props.theme.lightgrey};
  border: none;
  background: none;
  float: right;
  padding-top: 10px;
  padding-right: 16px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`
export default RemoveSearchButton
