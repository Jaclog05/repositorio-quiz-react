
import React from "react";
import Quiz from "./components/Quiz"
import Home from "./components/Home"

function App() {

  const [start, setStart] = React.useState(false)

  function toggle(){
    setStart(prev => !prev)
  }

    return !start ? <Home startGame={toggle}/> : 
                    <Quiz />
}

export default App;
