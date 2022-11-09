import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function clickHandler(){
    // console.log(id)
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "DELETE"
    })
    onDelete(id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={clickHandler}>Delete Question</button> {/*button for delete*/}
    </li>
  );
}

export default QuestionItem;
