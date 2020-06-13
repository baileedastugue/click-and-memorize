import React from "react";
import style from "./style.css";

const Scores = props => (
    <div style={style.scores} className="scores"> 
        <h3>
            Your Score: {props.yourScore}
        </h3>
        <h3>
            High Score: {props.highScore}
        </h3>
    </div>
)

export default Scores;