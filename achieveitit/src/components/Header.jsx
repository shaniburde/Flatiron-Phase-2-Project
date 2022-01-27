import React from 'react';
import NavBar from "./NavBar";
// import Dark from './Dark';
import styled from 'styled-components'

const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px red;
      color: red;
      margin: 0 1em;
      padding: 0.25em 1em;
    `

export default function Header() {
  return (
  
  <header>
    <br/>
    {/* <Button>
    <h1>achieveIt</h1>
    </Button> */}
       

      {/* <Dark /> */}
      <NavBar />
      
  </header>
  
  );
}
