import React from 'react'
import styled from 'styled-components'

const UserStyle = styled.section`
  {
  	float: right;
  	width: 100%;
    background: ${props => props.theme.white};
    color: ${props => props.theme.darkgrey};
  }
`
export default UserStyle
