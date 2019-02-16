import React from "react";
import "./Title.css";


//stateless component
const Title = props => (
  <div className="titlebox">
    <h1>Clicky Game</h1>
    <p>Clicky on image to earn points, but don't click on any more than once!</p> 
  </div>
);

export default Title;