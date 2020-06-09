import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import images from "./images.json";
import PlantImage from "./components/Images";

function App() {
    let allPlants = images.map(image => {
        return <PlantImage {...image}/>
    })
    
    return (
        
        <Wrapper>
            <Navbar/>
            {allPlants}
        </Wrapper>
        
    )
}

export default App;