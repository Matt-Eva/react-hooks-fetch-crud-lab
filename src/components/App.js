import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  // console.log(questions)

  function onDelete(id){
    console.log(id)
    // check if question id is not equal to passed in id
   const oneLess = questions.filter((question) => {
     return question.id !== id
    })
    // console.log(questions)
    // console.log(oneLess)
    setQuestions(oneLess)
  }

  useEffect(() =>{
    fetch('http://localhost:3000/questions')
    .then(r => r.json())
    .then(data =>{
      // console.log(data)
      setQuestions(data)
    })
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions}/> : <QuestionList onDelete={onDelete} questions={questions}/>}
    </main>
  );
}

export default App;
