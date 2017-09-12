import React from 'react'
import styled from 'styled-components'

const SidebarStyle = styled.section`
  {
    position: fixed;
    top: 120px;
    left: 0px;
    width: 300px;
    margin-right: -300px;
    float: left;
    overflow: hidden;
    height: 100%;
    background: ${props => props.theme.darkgrey};
    color: ${props => props.theme.green};
    z-index: 2;

    h2 {
      display: flex;
      align-items: center;
      padding: 16px;
      margin: 0;
    }

    h5 {
      font-weight: normal;
      text-transform: uppercase;
      margin-left: 16px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        a {
          color: ${props => props.theme.lightgrey};
          text-decoration: none;
          padding: 10px 16px;
          display: inline-block;

          &:hover, &:focus {
            color: ${props => props.theme.green};
            text-decoration: none;
          }

          .active {
            color: ${props => props.theme.green};
            background: ${props => props.theme.darkgreyhover};
          }
        }

        &:hover, &:focus {
          background: ${props => props.theme.darkgreyhover};
        }
      }
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`
export default SidebarStyle
