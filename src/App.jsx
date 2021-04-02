import React, { useState, useEffect } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="add-button" onClick={onClickAdd}>
          追加
        </button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了TODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <div className="list-content">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <div className="list-content">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
