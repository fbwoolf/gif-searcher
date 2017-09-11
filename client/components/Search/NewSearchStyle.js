import React from 'react'
import styled from 'styled-components'

const NewSearchStyle = styled.section`
  {
    position: fixed;
    top: 60px;
    left: 300px;
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.lightgrey};
    z-index: 1;
    display: flex;
    align-items: center;

    form {
      width: 50%;
      display: flex;
      align-items: center;
      margin-left: 20px;
    }

    input {
      width: 80%;
      height: 20px;
      padding: 12px 20px;
      border: none;
      font-size: 1rem;
      color: ${props => props.theme.white};
      background: ${props => props.theme.darkgrey};
    }

    input:focus {
      outline: none;
    }
  }
`
export default NewSearchStyle
