import React from "react";
import Options from "./Options"

export default function Question({question}){
    
    const allOptions = [...question["incorrect_answers"], question["correct_answer"]]
    
    const allOptionsVector = allOptions.map((option, idx) => {
        return <Options 
                    key={idx}
                    option={option} 
                />
    })
    
    return(
        <div className="question-wrapper">
            <h3 className="question">{question.question}</h3>
            <div className="option-wrapper">
                {allOptionsVector}
            </div>
            <hr/>
        </div>    
    )
}