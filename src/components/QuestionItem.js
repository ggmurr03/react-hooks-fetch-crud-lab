import React from "react";

function QuestionItem({ question, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleClick() {
    fetch(`http://localhost:4000/questions/${id}`, { method: "DELETE" })
      .then((resp) => {
        if (resp.ok) {setQuestions(questions.filter((q) => q.id !== question.id));
        } else {console.error("Failed to delete the question");
        }
      })
      .catch((error) => {
        console.error("Error deleting the question:", error);
      });
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
