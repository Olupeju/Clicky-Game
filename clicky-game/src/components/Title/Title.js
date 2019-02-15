import React from "react";
import "./Title.css";


//stateless component
const Title = props => (
  <div className="gameScore">
    <h3 className="score">Your Score <Arrow /> {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Title;