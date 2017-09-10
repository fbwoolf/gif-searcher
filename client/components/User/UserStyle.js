import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const UserStyle = styled.section`
  {
    background: ${props => props.theme.white};
    color: ${props => props.theme.darkgrey};
  }
`
export default UserStyle
