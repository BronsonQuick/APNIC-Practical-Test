import React from "react";
import logo from "../src/assets/images/apnic.svg";
import styles from "./App.module.css";

function App() {
    return (
        <div className="App">
            <header className={styles.Header}>
                <img src={logo} className={styles.Logo} alt="APNIC Logo" />
            </header>
        </div>
    );
}

export default App;
