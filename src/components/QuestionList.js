import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({question, onHandleDelete}) {


  const listQuestions = question[0]?.map((q) => <QuestionItem key={q.id} onHandleDelete={onHandleDelete} question={q}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
         {listQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
