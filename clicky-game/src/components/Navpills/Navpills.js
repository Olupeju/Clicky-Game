import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Clicky Game</a></li>
            <li
                className={props.message.indexOf("wrong") !== -1 ? 
                    "desc-wrong" : 
                    props.message.indexOf("wright") !== -1 ?
                        "desc-right" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;

