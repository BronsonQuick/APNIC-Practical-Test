import React from "react";
import logo from "../src/assets/images/apnic.svg";
import styles from "./App.module.css";
import Labs from './components/Labs/Labs.js';
import axios from "axios";

axios.defaults.baseURL = ' https://academy.apnic.net/wp-json/academy';

function App() {
    return (
        <div className="App">
            <header className={styles.Header}>
                <img src={logo} className={styles.Logo} alt="APNIC Logo" />
            </header>
            <main>
                <Labs />
            </main>
        </div>
    );
}

export default App;
