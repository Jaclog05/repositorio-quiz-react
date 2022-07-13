import React from "react";

export default function Home(props){
    return(
        <main className="home-main">
            <h1 className="home-title">Quizzical</h1>
            <p className="home-description">Some description if needed</p>
            <button className="start-button" onClick={props.startGame}>Start Quiz</button>
        </main>
    )
}