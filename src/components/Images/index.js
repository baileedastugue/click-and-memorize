import React from "react";
import "./style.css";



function PlantImage(props) {
    // console.log(props);

    return (
        <div className="img-container">
            {/* <button > */}
                <img
                    id={props.id}
                    alt={props.alt}
                    src={props.image}
                    data-clicked={props.clicked}
                    onClick={props.beenClicked}
                />
            {/* </button> */}
        </div>
    )
}

export default PlantImage;