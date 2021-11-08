import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionData, setQuestionData] = useState([])
  
  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(questions => setQuestionData(questions))
  }, [])

  function addQuestion(question){
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    }
    fetch(" http://localhost:4000/questions", configObj)
    .then(r => r.json())
    .then(newQuestion => setQuestionData([...questionData, newQuestion]))
  }

  function deleteQuestion(id){
    fetch(`  http://localhost:4000/questions/${id}`, {method: "DELETE"})
    .then(r => r.json())
    .then(() => {
      const minusOneQ = questionData.filter(question => question.id !== id)
      setQuestionData(minusOneQ)
    })
  }

  function changeAnswer(index, id) {
    const newAnswer ={
      correctIndex: index
    }
    const configObj ={
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnswer)
    }
    fetch(`http://localhost:4000/questions/${id}`, configObj)
    .then(r => r.json())
    .then(updatedQuestion => {
      const newQuestionData = questionData.map(question =>{
        if(question.id === id){
          return updatedQuestion
        } else{
          return question
        }
      })
      setQuestionData(newQuestionData)
    })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList questionData={questionData} 
      deleteQuestion={deleteQuestion} changeAnswer={changeAnswer}/>}
    </main>
  );
}

export default App;
