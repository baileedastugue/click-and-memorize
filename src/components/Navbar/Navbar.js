import React from "react";
import styles from "./style.css";

function Navbar() {
    return (
        <nav className="navbar" style={styles.nav}>
            <a href="/">Plant Game</a>

            <h4>High Score: </h4>
            <h4>Your score:</h4>
        </nav>
    )
}

export default Navbar;