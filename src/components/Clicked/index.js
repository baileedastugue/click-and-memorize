import React from "react";
import Wrapper from "../Wrapper";
import images from "../../images.json";
import PlantImage from "../Images";
import Navbar from "../Navbar/Navbar";
import Scores from "../Scores"



class Clicked extends React.Component {
    state = {
        yourScore: 0,
        highScore: 0
      };
    
    handleIncrement = () => {
        this.setState({ yourScore: this.state.yourScore + 1 });

        if (this.state.yourScore >= this.state.highScore) {
            this.setState({ highScore: this.state.highScore + 1});
        }
        
    };

    handleLoss = () => {
        this.setState({ yourScore: 0});
    }

    restartGame = () => {
        for (let i = 0; i < images.length; i++) {
            document.getElementById(i).setAttribute('data-clicked', false);
            // images[i].clicked = false;
            // console.log(images[i].clicked);
        }
        this.handleLoss();
    }

    shuffleImages = () => {
        // loop from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
        // console.log(images);
        for(let i = images.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = images[i]
            images[i] = images[j]
            images[j] = temp
          }
    }

    beenClicked = (event) => {
        if (event.target.getAttribute('data-clicked') === "true") {
            console.log(event.target);
            console.log("you lost");
            this.restartGame();
        } else {
            event.target.setAttribute('data-clicked', true);
            console.log(event.target.getAttribute('data-clicked', true))
            this.handleIncrement();
        }
        this.shuffleImages();
    }

    render() {
        return (
            <Wrapper>
                <Navbar>
                    <Scores yourScore={this.state.yourScore} highScore={this.state.highScore}/>
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
