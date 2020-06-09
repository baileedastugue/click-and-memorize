import React from "react";

const Scores = props => (
    <div> 
        <p>
            Your Score: {props.count}
        </p>
        {/* <p>
            High Score: {props.highScore}
        </p> */}
    </div>
)

export default Scores;