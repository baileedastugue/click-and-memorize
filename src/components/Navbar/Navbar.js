import React from "react";
import styles from "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar" style={styles.nav}>
           {props.children}
        </nav>
    )
}

export default Navbar;