import React from "react";
import Wrapper from "../Wrapper";
import images from "../../images.json";
import PlantImage from "../Images";
import Navbar from "../Navbar/Navbar";
import Scores from "../Scores"



class Clicked extends React.Component {
    state = {
        count: 0
      };
    
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      };

    beenClicked = (event) => {
        if (event.target.getAttribute('data-clicked') === "true") {
            console.log("you lost");
        } else {
            event.target.setAttribute('data-clicked', true);
        }
        this.handleIncrement();
    }

    render() {
        return (
            <Wrapper>
                <Navbar>
                    <Scores count={this.state.count}/>
                </Navbar>
                {images.map(image => (
                    <PlantImage 
                        {...image} 
                        beenClicked={this.beenClicked}
                        />
                ))}
            </Wrapper>
        )
    }
}

export default Clicked;
