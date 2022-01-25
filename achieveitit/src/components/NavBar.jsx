import React from 'react';
import { NavLink } from 'react-router-dom';



export default function NavBar() {
  return ( <div>

    <NavLink to="/reminders" exact className="button" 
    
        activeStyle={{
        background: "#606c38",
        }}> Reminders </NavLink>


      <NavLink to="/quotes" exact className="button" 
    
        activeStyle={{
          background: "#606c38",
        }}> Quotes </NavLink>

      <NavLink to="/events" exact className="button" 
    
        activeStyle={{
          background: "#606c38",
        }}> Events </NavLink>

      <NavLink to="/exercises" exact className="button" 
    
        activeStyle={{
          background: "#606c38",
        }}> Exercises </NavLink>

      <NavLink to="/todolist" exact className="button" 
    
        activeStyle={{
          background: "#606c38",
        }}> Tasks </NavLink>

        <NavLink to="/" exact className="button" 
            
                activeStyle={{
                background: "#606c38",
                // hover:{
                //   color:'black'
                // }
                }}> Home </NavLink>



  </div>
  );
}
