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

    handleLoss = () => {
        this.setState({ count: 0});
    }

    restartGame = () => {
        this.handleLoss();
        for (let i = 0; i < images.length; i++) {
            images[i].clicked = false;
        }
    }

    beenClicked = (event) => {
        if (event.target.getAttribute('data-clicked') === "true") {
            console.log("you lost");
            this.restartGame();
        } else {
            event.target.setAttribute('data-clicked', true);
            this.handleIncrement();
        }
        
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
