import React from "react";
import style from "./style.css";

const Scores = props => (
    <div style={style.scores} className="scores"> 
        <h1>
            Your Score: {props.yourScore}
        </h1>
        <h1>
            High Score: {props.highScore}
        </h1>
    </div>
)

export default Scores;