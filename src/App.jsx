import React, { useState } from 'react';
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useSteta([]);
  const [completeTodos, setCompleteTodos] = useSteta([]);
  
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  
  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }
  
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    setTodoText(""); 
  }
  
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }
  
  return (
    <>
      <InputTodo 
        todoText={todoText}
        onchange={onChangeTodoText}
        onCLick={onClickAdd}
      />
      
      <IncompleteTodos
        todos={incompleteTodos}
        onCLickComplete={onCLickComplete}
        onClickDelete={onClickDelete}
      />
      
      <CompleteTodos
        todos={completeTodos}
        onCLickBack={onCLickBack}
      />
      
    </>
  )
  
}