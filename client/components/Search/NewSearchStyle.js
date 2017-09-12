import React from 'react'
import styled from 'styled-components'

const NewSearchStyle = styled.section`
  {
    position: fixed;
    top: 60px;
    left: 0px;
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.lightgrey};
    z-index: 1;
    display: flex;
    align-items: center;

    form {
      width: 100%;
      display: flex;
      align-items: center;
      display: inline-block;
      text-align: center;
    }

    input {
      width: 25rem;
      margin-right: 5px;
      padding: 12px 20px;
      border: none;
      font-size: 1rem;
      color: ${props => props.theme.white};
      background: ${props => props.theme.darkgrey};

      &:hover, &:focus {
        outline: none;
      }
    }

    @media only screen and (max-width: 768px) {
      height: 125px;

      input {
        width: 90%;
        margin-bottom: 5px;
      }
    } 
  }
`
export default NewSearchStyle
