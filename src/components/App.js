import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestion] = useState([])

  function handleAddQuestion(newQuestion){
    setQuestion([...question, newQuestion])
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => {
      return setQuestion([data])
    })
  }, [])

  function handleDelete(deletedQuestion) {
    const updatedQuestions = question.filter(q => q.id !== deletedQuestion.id);
    setQuestion(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList question={question} onHandleDelete={handleDelete}/>}
    </main>
  );
}

export default App;
