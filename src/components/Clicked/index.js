import React from "react";
import Wrapper from "../Wrapper";
import images from "../../images.json";
import PlantImage from "../Images";
import Navbar from "../Navbar/Navbar";
import Scores from "../Scores"



class Clicked extends React.Component {
    state = {
        yourScore: 0,
        highScore: 0,
        images: images,
    };
    
    // componentDidMount() {
    //     this.shuffleImages();
    // };

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
        this.state.images.map((image) => {
            image.clicked = false;
        })
        this.handleLoss();
    }

    shuffleImages = () => {
        // loop from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
        // console.log(images);
        for(let i = this.state.images.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = images[i]
            images[i] = images[j]
            images[j] = temp
        }
        return images;
    }

    beenClicked = (event) => {
        this.state.images.map((image) => {
          if (parseInt(event.target.id) === image.id) {
            if (image.clicked === false) {
                this.handleIncrement();
                image.clicked = true;
            } else {
                this.restartGame();
            }
          }
        });
        this.setState({
            images: this.shuffleImages()
        });
    }

    render() {
        return (
            <Wrapper>
                <Navbar>
                    <Scores yourScore={this.state.yourScore} highScore={this.state.highScore}/>
                </Navbar>
                {this.state.images.map(image => (
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
