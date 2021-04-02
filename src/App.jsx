import React, { useState, useEffect } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああああ",
    "いいいいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "カカかっか",
    "さささささっっっっっっささ"
  ]);
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
                  <button>完了</button>
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
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div className="list-content">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
