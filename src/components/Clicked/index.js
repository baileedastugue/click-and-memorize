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
        for (let i = 0; i < images.length; i++) {
            document.getElementById(i).setAttribute('data-clicked', false);
            // images[i].clicked = false;
            // console.log(images[i].clicked);
        }
        this.handleLoss();
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
