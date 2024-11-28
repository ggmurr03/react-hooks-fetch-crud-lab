import React, {useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question, index)=> <QuestionItem questions={questions} setQuestions={setQuestions} key={index} question={question}/>)
    }</ul>
    </section>
  );
}

export default QuestionList;
