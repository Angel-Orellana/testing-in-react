import React from "react";
import Logo from "../public/security.png";

const styles = {
    header: {
        display: "block",
        width: "100%",
        height: 50,
        margin: "0 auto",
        padding: "0 10px", 
        background: "#121212"
    },
    wrapper: {
        position: "relative",
        display: "block",
        width: "100%",
        height: "100%",
        margin: "0 auto"
    }, 
    logo: {
        display: "flex",
        width: 80,
        position: "absolute",
        left: 5, 
        top: "15%"
    }, 
    img : {
        display: "block",
        width: "100%",
        margin: 0
    }, 
    text : {
        minWidth: 'max-content',
        position: 'relative',
        color: '#fff',
        fontSize: 'x-large',
        fontFamily: 'monospace',
        top: '10px'
    }
}

const Header = () => {
    return (
        <header style={styles.header} data-test="wrapper">
            <div style={styles.wrapper}>
                <div style={styles.logo}>
                    <img src={Logo} alt="Logo" style={styles.img} data-test="logo"/>
                    <span style={styles.text}>My first Test in React!</span>
                </div>
            </div>
        </header>
    )
};


export default Header; 