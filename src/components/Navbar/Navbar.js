import React from "react";

const styles = {
    nav: {
        background: "green",
        justifyContent: "flex-end"
    }
};

function Navbar() {
    return (
        <nav className="navbar" style={styles.nav}>
            <a href="/">Welcome</a>
        </nav>
    )
}

export default Navbar;