import React from "react";

const Scores = props => (
    <div> 
        <p>
            Your Score: {props.yourScore}
        </p>
        <p>
            High Score: {props.highScore}
        </p>
    </div>
)

export default Scores;