import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({questions, onDelete}) {

  const mappedQuestions = questions.map((question) =>{
    // console.log(question)
    return <QuestionItem question={question} onDelete={onDelete}/>
  })
  // console.log(mappedQuestions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
