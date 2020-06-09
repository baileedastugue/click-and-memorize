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

    render() {
        return (
            <Wrapper>
                <Navbar>
                    <Scores count={this.state.count}/>
                </Navbar>
                {images.map(image => (
                    <PlantImage 
                        {...image} 
                        handleIncrement={this.handleIncrement}
                        />
                ))}
            </Wrapper>
        )
    }
}

export default Clicked;
