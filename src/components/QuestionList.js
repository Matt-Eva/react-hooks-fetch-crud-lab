import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionData, deleteQuestion, changeAnswer}) {

  const displayQuestions = questionData.map(question => <QuestionItem key={question.id} question={question} 
    deleteQuestion={deleteQuestion} changeAnswer={changeAnswer}/> )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
