import React from 'react';
import styled from "styled-components";


export default function Dark() {
    
    const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px red;
      color: red;
      margin: 0 1em;
      padding: 0.25em 1em;
    `
  
  return (<div>
      <Button>hello</Button>
  </div>);
}

// npm install --save styled-components
