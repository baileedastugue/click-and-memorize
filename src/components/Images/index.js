import React from "react";
import "./style.css";

function PlantImage(props) {
    return (
        <div className="img-container">
            <img
                alt={props.alt}
                src={props.image}
            />
        </div>
    )
}

export default PlantImage;