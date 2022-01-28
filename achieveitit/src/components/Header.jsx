import React, { useState } from 'react';
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
  
    // function myFunction() {
    //   var element = document.body;
    //   var elementOne = document.header;
    //   var elementTwo = document.querySelector(".button-counter");
    //   element.classList.toggle("test");
    //   elementOne.classList.toggle("test");
    //   elementTwo.classList.toggle("test");
    //   setIsClicked(!isClicked);
    // }
    

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
    let element = document.body;
    // let arrowButtons = document.getElementsByClassName("button-counter")
   
    element.classList.toggle("dark");
    // arrowButtons.classList.toggle("dark");
    setIsClicked(isClicked => !isClicked);
  }

  console.log(isClicked)

  return (
  <>
  <button className="dark-mode-btn" onClick={myFunction}>{isClicked ? "☾" : "☼"}</button>
  <header>
      
       <h1 className="center">achieveIt</h1>

      {/* <Dark /> */}
      <NavBar />
      
  </header>
  </>
  );
}
