import React from "react";
import styles from './App.module.scss';
import Services from "./components/ services";
import Work from "./components/work";
import Benefit from "./components/benefit";
import Commercial from "./components/ commercial";
import Header from "./components/header";

function App() {
    return (
        <div className={styles.container}>
            <Header />
            <Commercial />
            <Benefit />
            <Services/>
            <Work />
        </div>
    );
}

export default App;
