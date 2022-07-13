import React from "react";
import Question from "./Question"

export default function Quiz(){
    
    const [apiQuestions, setApiQuestions] = React.useState([])
    
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setApiQuestions(data["results"]))
    }, [])
    
    const questionVector = apiQuestions.map((ques, idx) => (
         <Question 
            key={idx} 
            question={apiQuestions[idx]}
        />
    ))
    
    return(
        <main className="quiz-main">
            {questionVector}
            <button className="check-button">Check Answers</button>
        </main>
    )
}