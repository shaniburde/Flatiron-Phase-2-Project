import React from 'react';
import { NavLink } from 'react-router-dom';



export default function NavBar() {
  return ( <div>

        <NavLink to="/" exact className="button"    
                
            activeStyle={{
            background: "#fffdef",
            color: "#39442e",
            textShadow: "none",
            boxShadow: "0 3px #b5cb98",
            transform: "translateY(2px)",
            fontWeight: "bold",
            }}> Home </NavLink>

        <NavLink to="/reminders" exact className="button" 
        
            activeStyle={{
            background: "#fffdef",
            color: "#39442e",
            textShadow: "none",
            boxShadow: "0 3px #b5cb98",
            transform: "translateY(2px)",
            fontWeight: "bold",
            }}> Reminders </NavLink>


      <NavLink to="/quotes" exact className="button" 
    
        activeStyle={{
          background: "#fffdef",
          color: "#39442e",
          textShadow: "none",
          boxShadow: "0 3px #b5cb98",
          transform: "translateY(2px)",
          fontWeight: "bold",
        }}> Quotes </NavLink>

      <NavLink to="/events" exact className="button" 
    
        activeStyle={{
          background: "#fffdef",
          color: "#39442e",
          textShadow: "none",
          boxShadow: "0 3px #b5cb98",
          transform: "translateY(2px)",
          fontWeight: "bold",
        }}> Events </NavLink>

      <NavLink to="/exercises" exact className="button" 
    
        activeStyle={{
          background: "#fffdef",
          color: "#39442e",
          textShadow: "none",
          boxShadow: "0 3px #b5cb98",
          transform: "translateY(2px)",
          fontWeight: "bold",
        }}> Exercises </NavLink>

      <NavLink to="/todolist" exact className="button" 
    
        activeStyle={{
          background: "#fffdef",
          color: "#39442e",
          textShadow: "none",
          boxShadow: "0 3px #b5cb98",
          transform: "translateY(2px)",
          fontWeight: "bold",
        }}> Tasks </NavLink>



  </div>
  );
}
